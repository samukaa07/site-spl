import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, User  } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const formatPhone = (value: string) => {
  const cleaned = value.replace(/\D/g, '');

  if (cleaned.length <= 10) {
    return cleaned.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
  } else {
    return cleaned.replace(/^(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
  }
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
    ...prev,
    [name]: name === 'phone' ? formatPhone(value) : value
  }));
};

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const serviceId = 'splinformatica';
  const templateId = 'template_l1x01u8';          // envia para você
  const clientTemplateId = 'template_0pjmzbu';    // envia para o cliente
  const publicKey = 'LgkzrK1yvaGQUp81K';

  const templateParams = {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    subject: formData.subject,
    message: formData.message
  };

  emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then(() => {
      // Envia confirmação automática para o cliente
      emailjs.send(serviceId, clientTemplateId, templateParams, publicKey);

      alert('Mensagem enviada com sucesso!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    })
    .catch((error) => {
      console.error('Erro ao enviar:', error);
      alert('Erro ao enviar a mensagem. Tente novamente.');
    });
};

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Entre em Contato"
          subtitle="Vamos conversar sobre o seu próximo projeto"
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-lg p-8 order-2 lg:order-1 animate-fadeIn">
            <h3 className="text-2xl font-bold mb-6 text-blue-900">Envie uma mensagem</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Assunto
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="">Selecione uma opção</option>
                    <option value="Site institucional">Site institucional</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="Landing page">Landing page</option>
                    <option value="Sistema web">Sistema web</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-800 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                Enviar mensagem
                <Send size={18} className="ml-2" />
              </button>
            </form>
          </div>
          
          <div className="order-1 lg:order-2 animate-fadeIn animation-delay-300">
            <h3 className="text-2xl font-bold mb-6 text-blue-900">Informações de contato</h3>
            
            <div className="bg-gradient-to-br from-blue-800 to-blue-900 text-white rounded-lg shadow-lg p-8 h-full">
              <div className="flex items-start mb-8">
                <User className="h-6 w-6 text-blue-300 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-lg mb-1">Responsável</h4>
                  <p className="text-blue-100">Samuel Pereira Lima</p>
                </div>
              </div>
              <div className="flex items-start mb-8">
                <Phone className="h-6 w-6 text-blue-300 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-lg mb-1">Telefone</h4>
                  <p className="text-blue-100">(11) 96156-8904</p>
                </div>
              </div>
              
              <div className="flex items-start mb-8">
                <Mail className="h-6 w-6 text-blue-300 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-lg mb-1">Email</h4>
                  <p className="text-blue-100">splinformatica1@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-blue-300 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-lg mb-1">Endereço</h4>
                  <p className="text-blue-100">                    
                    Guarulhos, São Paulo - SP<br />                  
                  </p>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="font-bold text-lg mb-4">Horário de atendimento</h4>
                <div className="bg-blue-800/50 p-4 rounded-md">
                  <p className="text-blue-100 mb-2">Segunda a Sexta: 9h às 18h</p>
                  <p className="text-blue-100">Sábado: 9h às 13h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;