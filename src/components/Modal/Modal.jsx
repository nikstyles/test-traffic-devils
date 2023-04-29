import styled from 'styled-components';
import { createPortal } from 'react-dom';
import { RiCloseLine } from 'react-icons/ri';
import items from './items';
// import { HiOutlineMail } from 'react-icons/hi';
import { useTranslation } from 'react-i18next';

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.753);
  z-index: 10;
`;

const ModalContent = styled.div`
  background-color: #262641;
  border-radius: ${props => props.theme.radii.big};
  padding: 30px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;

  /* min-height: 250px;
  max-width: 550px; */
  /* width: 100%; */

  box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 0.096),
    0px 0px 60px -5px rgba(103, 62, 225, 0.486),
    0px 20px 40px -7px rgba(0, 0, 0, 0.3);
`;

const CloseBtn = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  color: ${props => props.theme.colors.text};
  padding: 20px;
  cursor: pointer;
`;

const ModalTitle = styled.h3`
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.heading};
  color: ${props => props.theme.colors.text};
  text-align: center;
  padding-top: 20px;
`;

const ModalList = styled.div`
  padding-top: 40px;
  padding-bottom: 20px;
`;
const ModalItemBox = styled.ul`
  text-decoration: none;
  list-style: none;
  min-width: 200px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  gap: 20px;
  @media (min-width: 700px) {
    flex-wrap: nowrap;
  }
`;
const ItemModal = styled.li`
  width: 90px;
  border-radius: ${p => p.theme.radii.big};
  background-color: #ffffff2b;
`;
const ContactIcon = styled.a`
  color: ${props => props.theme.colors.text};
  padding: 25px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const ContactTitle = styled.p`
  padding-top: 10px;
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.heading};
  color: ${props => props.theme.colors.text};
`;

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ toggleModal }) {
  const elements = items.map(({ id, title, icon, link }) => (
    <ItemModal key={id}>
      <ContactIcon href={link} alt="x" target="_blank">
        {icon}
        <ContactTitle>{title}</ContactTitle>
        {/* {title} */}
      </ContactIcon>
      {/* <ContactTitle>{title}</ContactTitle> */}
    </ItemModal>
  ));
  const { t } = useTranslation();
  return createPortal(
    <ModalBackdrop onClick={() => toggleModal()}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <ModalTitle>{t('Contacts.title')}</ModalTitle>
        <ModalList>
          <ModalItemBox>{elements}</ModalItemBox>
        </ModalList>
        <CloseBtn type="button" onClick={() => toggleModal()}>
          <RiCloseLine size={30} />
        </CloseBtn>
      </ModalContent>
    </ModalBackdrop>,
    modalRoot
  );
}
