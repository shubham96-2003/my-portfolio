export const emailJsConfig = {
  publicKey: 'hwA-lemFdGWGXHyZp',
  serviceId: 'service_1wfpamr',
  templateId: 'template_x54df7s',
  recipientEmail: 'shubhamvitukade96@gmail.com',
};

export function isEmailJsConfigured(): boolean {
  return !Object.values(emailJsConfig).some((value) => value.startsWith('YOUR_EMAILJS_'));
}
