import React from "react";
import {
  Box,
  Stack,
  Input,
  Heading,
  Button,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import { useState } from "react";

//initial form State
const initState = {
  name: "",
  type: "",
  img: "",
  price: "",
  oriprice: "",
};

const Admin = () => {
  const [formState, setFormState] = useState(initState);
  console.log(formState);
  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  //handleADD
  const handleAdd = async (e) => {
    const url = `https://shoppers-in.onrender.com/products`;
    try {
      let res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify({
          name: formState.name,
          type: formState.type,
          img: formState.img,
          price: formState.price,
          oriprice: formState.oriprice,
        }),
      });

      console.log("API-res", res);
      //let data = await res.json();
    } catch (error) {
      console.log("api-eerr", error);
    }
  };
  //handleUpdate
  const handleUpdate = () => {};
  //handleDelete
  const handleDelete = () => {};

  return (
    <Box>
      <Box w="100%" h="20vh" border="1px solid grey" mt={10}></Box>
      <Box w={400} margin="auto" p={10} border="1px solid grey" mb={10} mt={10}>
        <Tabs>
          <TabList>
            <Tab>ADD</Tab>
            <Tab>UPDATE</Tab>
            <Tab>DELETE</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              {/* <p>one!</p> */}
              <Stack spacing={3}>
                <Heading>Add Product</Heading>
                <Input
                  placeholder="Product Name"
                  size="md"
                  type="text"
                  onChange={handleChange}
                  value={formState.name}
                  name="name"
                />
                <Input
                  placeholder="Product Type"
                  size="md"
                  type="text"
                  onChange={handleChange}
                  value={formState.type}
                  name="type"
                />
                <Input
                  placeholder="Product Image Url"
                  size="md"
                  type="link"
                  onChange={handleChange}
                  value={formState.img}
                  name="img"
                />
                <Input
                  placeholder="Product Price"
                  size="md"
                  type="number"
                  onChange={handleChange}
                  value={formState.price}
                  name="price"
                />
                <Input
                  placeholder="Product origninal Price "
                  size="md"
                  type="number"
                  onChange={handleChange}
                  value={formState.oriprice}
                  name="oriprice"
                />
                <Button color="white" bg="green" onClick={handleAdd}>
                  ADD
                </Button>
              </Stack>
            </TabPanel>
            <TabPanel>
              {/* <p>two!</p> */}
              <Stack spacing={3}>
                <Heading>Update Product</Heading>
                <Input placeholder="Product Name" size="md" type="text" />
                <Input placeholder="Product Type" size="md" type="text" />
                <Input placeholder="Product Image Url" size="md" type="link" />
                <Input placeholder="Product Price" size="md" type="number" />
                <Input
                  placeholder="Product origninal Price "
                  size="md"
                  type="number"
                />
                <Button color="white" bg="#FDDA0D" onClick={handleUpdate}>
                  UPDATE
                </Button>
              </Stack>
            </TabPanel>
            <TabPanel>
              {/* <p>three!</p> */}
              <Stack spacing={3}>
                <Heading>Delete Product</Heading>
                <Input placeholder="Product Name" size="md" type="text" />
                <Input placeholder="Product Type" size="md" type="text" />
                <Input placeholder="Product Image Url" size="md" type="link" />
                <Input placeholder="Product Price" size="md" type="number" />
                <Input
                  placeholder="Product origninal Price "
                  size="md"
                  type="number"
                />
                <Button color="white" bg="red" onClick={handleDelete}>
                  DELETE
                </Button>
              </Stack>
            </TabPanel>
          </TabPanels>
        </Tabs>

        {/* <Stack spacing={3}>
          <Heading>Add Product</Heading>
          <Input placeholder="Product Name" size="md" type="text" />
          <Input placeholder="Product Type" size="md" type="text" />
          <Input placeholder="Product Image Url" size="md" type="link" />
          <Input placeholder="Product Price" size="md" type="number" />
          <Input
            placeholder="Product origninal Price "
            size="md"
            type="number"
          />
          <Button color="white" bg="green">
            ADD
          </Button>
        </Stack> */}
      </Box>
    </Box>
  );
};

export default Admin;
