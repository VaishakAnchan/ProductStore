import {
  Box,
  Container,
  Heading,
  useColorModeValue,
  VStack,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useProductStore } from "../store/product";

const CreatePage = () => {
  const [NewProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const toast = useToast();
  const { createProduct } = useProductStore();
  const handelAddProduct = async () => {
    const { success, message } = await createProduct(NewProduct);
    if (!success) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        isClosable: true,
      });
    } else {
      toast({
        title: "Success",
        description: message,
        status: "success",
        isClosable: true,
      });
    }
    setNewProduct({ name: "", price: "", image: "" });
  };

  return (
    <Container maxW={"container.sm"} mt={10}>
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
          Create New Product
        </Heading>
        <Box
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          p={6}
          rounded={"lg"}
          shadow={"md"}
        >
          <VStack spacing={5}>
            <Input
              placeholder="Product Name"
              name="name"
              value={NewProduct.name}
              onChange={(e) =>
                setNewProduct({ ...NewProduct, name: e.target.value })
              }
            />
            <Input
              placeholder="Price"
              name="price"
              value={NewProduct.price}
              onChange={(e) =>
                setNewProduct({ ...NewProduct, price: e.target.value })
              }
            />
            <Input
              placeholder="Image"
              name="image"
              value={NewProduct.image}
              onChange={(e) =>
                setNewProduct({ ...NewProduct, image: e.target.value })
              }
            />
            <Button colorScheme="blue" onClick={handelAddProduct} w={"full"}>
              Add Product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default CreatePage;
