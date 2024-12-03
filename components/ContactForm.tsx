import React, { useState } from "react";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [responseMessageType, setResponseMessageType] = useState<'success' | 'error'>('success');

  // Initialisation du SDK EmailJS
  const initializeEmailJS = () => {
    emailjs.init({
      publicKey: 'xwmrsdVd5CAim8jNb', // Utilisation de votre clé publique
    });
  };

  // Charger l'initialisation de EmailJS à l'ouverture du composant
  React.useEffect(() => {
    initializeEmailJS();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setResponseMessage(''); // Réinitialiser le message avant l'envoi

    // Validation du formulaire
    if (!formData.email || !formData.message) {
      setResponseMessage('Veuillez remplir tous les champs.');
      setResponseMessageType('error');
      setIsSending(false);
      return;
    }

    const form = e.target as HTMLFormElement;

    // Envoi de l'email via EmailJS
    try {
      const result = await emailjs.sendForm(
        'service_qvq5ucm', // Service ID
        'template_g5ioxtr', // Template ID
        form // Le formulaire complet
      );
      if (result.status === 200) {
        setResponseMessage('Message envoyé avec succès ! Nous vous répondrons dans les meilleurs délais.');
        setResponseMessageType('success');
        setFormData({ email: '', message: '' }); // Réinitialisation du formulaire
      } else {
        setResponseMessage('Erreur lors de l\'envoi du message. Veuillez réessayer.');
        setResponseMessageType('error');
      }
    } catch (error) {
      console.error('Erreur:', error);
      setResponseMessage('Erreur lors de l\'envoi du message. Veuillez réessayer.');
      setResponseMessageType('error');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form id="contact-form" onSubmit={handleSubmit} className="w-full max-w-lg space-y-3">
      <input type="hidden" name="contact_number" value="697483" />

      {/* Champ Email */}
      <div className="w-full mb-4">
        <label htmlFor="email" className="dark:text-white">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          className="p-2 bg-gray-200 dark:bg-[#2D3339] dark:text-white rounded-md w-full"
          placeholder="Entrez votre email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      {/* Champ Message */}
      <div className="w-full mb-4">
        <label htmlFor="message" className="dark:text-white">Message</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="p-2 bg-gray-200 dark:bg-[#2D3339] dark:text-white rounded-md w-full"
          placeholder="Écrivez votre message"
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      {/* Bouton Envoyer */}
      <button
        type="submit"
        className="py-2 px-6 bg-accentColor rounded-lg hover:bg-opacity-80 transition-all"
        disabled={isSending}
      >
        {isSending ? 'Envoi en cours...' : 'Envoyer'}
      </button>

      {/* Message de réponse */}
      {responseMessage && (
        <p className={`text-center mt-2 ${responseMessageType === 'success' ? 'text-green-500' : 'text-red-500'}`}>
          {responseMessage}
        </p>
      )}
    </form>
  );
};

export default ContactForm;
