import { ViewIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  IconButton,
  Text,
  Image,
 
} from "@chakra-ui/react";

const ProfileModal = ({ user, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {children ? (
        <span onClick={onOpen}>{children}</span>
      ) : (
        <IconButton d={{ base: "flex" }} icon={<ViewIcon />} onClick={onOpen} />
      )}
      
      <Modal size="lg" onClose={onClose} isOpen={isOpen} isCentered>
  <ModalOverlay />
  <ModalContent h="410px" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
    <ModalHeader fontSize="40px" fontFamily="Work sans" justifyContent="center">
      {user.name}
    </ModalHeader>
    <ModalCloseButton />
    <ModalBody display="flex" flexDirection="column" alignItems="center" justifyContent="center" flex="1">
      <Image borderRadius="full" boxSize="150px" src={user.pic} alt={user.name} />
      <Text fontSize={{ base: "28px", md: "30px" }} fontFamily="Work sans" mt="4">
        Email: {user.email}
      </Text>
    </ModalBody>
    <ModalFooter justifyContent="center">
      <Button onClick={onClose}>Close</Button>
    </ModalFooter>
  </ModalContent>
</Modal>

    </>
  );
};

export default ProfileModal;