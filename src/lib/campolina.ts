export const contact = {
  phone: '5531996145087',
  displayPhone: '(31) 99614-5087',
  instagram: 'https://www.instagram.com/campolina.consignado/',
  address: 'Avenida Guarapari, 37, sala 07, Pampulha, Belo Horizonte, MG',
};

export const messages = {
  general: 'Olá! Acessei o site da Campolina e gostaria de conhecer as opções de crédito disponíveis para o meu perfil.',
  retirees: 'Olá! Sou aposentado(a) ou pensionista e gostaria de consultar as opções de crédito disponíveis.',
  publicServants: 'Olá! Sou servidor(a) público(a) e gostaria de conhecer as opções de crédito disponíveis para o meu perfil.',
  fgts: 'Olá! Gostaria de saber mais sobre a antecipação do FGTS e verificar se tenho essa opção disponível.',
  appointment: 'Olá! Gostaria de agendar um atendimento presencial na Campolina.',
  specialist: 'Olá! Gostaria de conversar com a equipe da Campolina sobre as opções de crédito disponíveis para mim.',
};

export function whatsappUrl(message: string = messages.general) {
  return `https://wa.me/${contact.phone}?text=${encodeURIComponent(message)}`;
}

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address)}`;