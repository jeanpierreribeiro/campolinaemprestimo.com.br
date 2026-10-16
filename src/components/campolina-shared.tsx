import { useState, type ReactNode } from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowUpRight, Menu, X, Phone, Instagram, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { contact, whatsappUrl } from '@/lib/campolina';
import { cn } from '@/lib/utils';
import officialLogo from '@/assets/campolina-logo-transparente.png.asset.json';

export function WhatsAppIcon({ className }: { className?: string }) {
  return <svg className={cn('size-5', className)} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.52 3.48A11.85 11.85 0 0 0 12.04 0C5.47 0 .13 5.34.13 11.9c0 2.1.55 4.15 1.59 5.96L.03 24l6.3-1.65a11.9 11.9 0 0 0 5.7 1.45h.01C18.6 23.8 23.94 18.46 23.94 11.9c0-3.18-1.24-6.17-3.42-8.42ZM12.04 21.8a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.38a9.87 9.87 0 0 1-1.52-5.26C2.15 6.44 6.59 2 12.05 2a9.81 9.81 0 0 1 7 2.9 9.82 9.82 0 0 1 2.89 7c0 5.46-4.44 9.9-9.9 9.9Zm5.43-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.18.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.48-1.75-1.65-2.05-.18-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.62.72.23 1.37.2 1.88.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.18-1.42-.08-.12-.28-.2-.58-.35Z" /></svg>;
}

export function Brand() {
  return <Link to="/" aria-label="Campolina Consignado — início" className="brand"><img src={officialLogo.url} alt="Campolina — Empréstimo Consignado" width={512} height={360} /></Link>;
}

export function WhatsAppButton({ children, message, className, outline = false }: { children: ReactNode; message?: string; className?: string; outline?: boolean }) {
  return <Button asChild variant={outline ? 'outline' : 'default'} className={cn('contact-button', outline ? 'contact-button-secondary' : 'contact-button-primary', className)}><a href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer"><WhatsAppIcon />{children}<ArrowUpRight className="ml-auto" /></a></Button>;
}

const navigation = [['Soluções', 'solucoes'], ['Como funciona', 'como-funciona'], ['Dúvidas frequentes', 'duvidas'], ['Contato', 'contato']];

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="page-container header-inner"><Brand /><nav aria-label="Navegação principal" className="desktop-nav">{navigation.map(([label, id]) => <a key={id} href={`/#${id}`}>{label}</a>)}</nav><WhatsAppButton className="header-contact">Fale pelo WhatsApp</WhatsAppButton><Button variant="ghost" size="icon" className="mobile-menu-button" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button></div>{open && <nav id="mobile-menu" aria-label="Navegação no celular" className="mobile-nav">{navigation.map(([label, id]) => <a key={id} href={`/#${id}`} onClick={() => setOpen(false)}>{label}</a>)}<WhatsAppButton>Fale pelo WhatsApp</WhatsAppButton></nav>}</header>;
}

export function Footer() {
  return <footer className="site-footer"><div className="page-container"><div className="footer-grid"><div><Brand /><p className="footer-intro">Orientação clara. Atendimento próximo.<br />Crédito pensado para o seu perfil.</p></div><div><h3>Explore</h3><nav aria-label="Navegação do rodapé">{navigation.map(([label, id]) => <a key={id} href={`/#${id}`}>{label}</a>)}</nav></div><div><h3>Vamos conversar</h3><a href={whatsappUrl()} target="_blank" rel="noopener noreferrer"><Phone />{contact.displayPhone}</a><a href={contact.instagram} target="_blank" rel="noopener noreferrer"><Instagram />@campolina.consignado</a><p className="footer-address"><MapPin /><span>Avenida Guarapari, 37, sala 07<br />Pampulha — Belo Horizonte/MG</span></p></div></div><div className="footer-legal"><p>A concessão de crédito está sujeita a análise, elegibilidade e condições aplicáveis.</p><Link to="/politica-de-privacidade">Política de Privacidade</Link></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Campolina Consignado.</span><span>Belo Horizonte, Minas Gerais</span></div></div></footer>;
}

export function FloatingWhatsApp() {
  return <Button asChild variant="whatsapp" size="icon" className="floating-whatsapp"><a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" aria-label="Fale com a Campolina pelo WhatsApp" title="Fale pelo WhatsApp"><WhatsAppIcon /></a></Button>;
}