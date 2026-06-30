import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

import { emailJsConfig, isEmailJsConfigured } from '../../shared/config/emailjs.config';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { SocialLink } from '../../shared/models/portfolio.models';

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidPhone(value: string): boolean {
  const normalized = value.replace(/[\s()+-]/g, '');
  return /^\d{10,15}$/.test(normalized);
}

function emailOrPhoneValidator(control: AbstractControl): ValidationErrors | null {
  const value = String(control.value ?? '').trim();

  if (!value) {
    return { required: true };
  }

  return isValidEmail(value) || isValidPhone(value) ? null : { emailOrPhone: true };
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ScrollRevealDirective,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  @Input({ required: true }) socialLinks: SocialLink[] = [];

  readonly submitted = signal(false);
  readonly isSending = signal(false);
  readonly errorMessage = signal('');
  readonly isEmailJsReady = isEmailJsConfigured();
  private readonly fb = new FormBuilder();

  readonly contactForm = this.fb.group({
    name: ['', Validators.required],
    contactInfo: ['', [emailOrPhoneValidator]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  readonly nameControl = this.contactForm.controls.name;
  readonly contactInfoControl = this.contactForm.controls.contactInfo;
  readonly messageControl = this.contactForm.controls.message;

  async submitForm(): Promise<void> {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      this.submitted.set(false);
      this.errorMessage.set(
        'Please fill in your name, a valid email or mobile number, and a message of at least 10 characters.',
      );
      return;
    }

    if (!this.isEmailJsReady) {
      this.errorMessage.set(
        'EmailJS is not configured yet. Add your public key, service ID, and template ID in emailjs.config.ts.',
      );
      this.submitted.set(false);
      return;
    }

    this.isSending.set(true);
    this.errorMessage.set('');
    this.submitted.set(false);

    try {
      const { name, contactInfo, message } = this.contactForm.getRawValue();
      const trimmedContactInfo = String(contactInfo ?? '').trim();
      const isEmailContact = isValidEmail(trimmedContactInfo);

      await emailjs.send(
        emailJsConfig.serviceId,
        emailJsConfig.templateId,
        {
          from_name: name ?? '',
          from_email: isEmailContact ? trimmedContactInfo : '',
          reply_to: isEmailContact ? trimmedContactInfo : '',
          contact_info: trimmedContactInfo,
          contact_type: isEmailContact ? 'Email' : 'Mobile',
          message: message ?? '',
          to_email: emailJsConfig.recipientEmail,
        },
        {
          publicKey: emailJsConfig.publicKey,
        },
      );

      this.submitted.set(true);
      this.contactForm.reset();
      this.contactForm.markAsPristine();
      this.contactForm.markAsUntouched();
    } catch (error) {
      console.error('EmailJS send failed:', error);

      if (error instanceof EmailJSResponseStatus) {
        this.errorMessage.set(
          `EmailJS error ${error.status}: ${error.text}. Check your EmailJS service, template, and connected Gmail account.`,
        );
      } else if (error instanceof Error) {
        this.errorMessage.set(`EmailJS setup error: ${error.message}`);
      } else {
        this.errorMessage.set(
          'Message could not be sent. Check your EmailJS service, template, and connected Gmail account.',
        );
      }
    } finally {
      this.isSending.set(false);
    }
  }
}
