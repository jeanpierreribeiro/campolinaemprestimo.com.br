import { describe, expect, it } from 'vitest';
import { contact, messages, whatsappUrl, mapsUrl } from '../lib/campolina';

describe('Campolina official destinations', () => {
  it('directs all contextual WhatsApp conversations to the official number', () => {
    for (const message of Object.values(messages)) {
      const url = new URL(whatsappUrl(message));
      expect(url.origin + url.pathname).toBe('https://wa.me/5531996145087');
      expect(url.searchParams.get('text')).toBe(message);
    }
  });
  it('uses the requested general inquiry without changing the message', () => {
    expect(new URL(whatsappUrl()).searchParams.get('text')).toBe('Olá! Acessei o site da Campolina e gostaria de conhecer as opções de crédito disponíveis para o meu perfil.');
  });
  it('searches the official address rather than inventing coordinates', () => {
    expect(new URL(mapsUrl).searchParams.get('query')).toBe('Avenida Guarapari, 37, sala 07, Pampulha, Belo Horizonte, MG');
    expect(new URL(mapsUrl).pathname).toBe('/maps/search/');
  });
  it('links to the official Instagram account', () => {
    expect(contact.instagram).toBe('https://www.instagram.com/campolina.consignado/');
  });
});