import {
  ChakraProvider,
  Input,
  Button,
  Box,
  Heading,
  Table,
  Tbody,
  Th,
  Tr,
  Thead,
  TableContainer,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { TextAnnotator } from "react-text-annotate";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [showText, setShowText] = useState(false);

  const [show, setShow] = useState(false);
  const [state, setState] = useState({
    value: [{ start: 18, end: 50, tag: "" }],
    tag: "",
  });

  const handleTextChange = (value) => {
    setState({ value });
    console.log(value);
    setShow(true);
  };
  const handleSubmit = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <ChakraProvider>
      <Box>
        <Box mt="2em" textAlign="center">
          <Heading as="h1" size="xl">
            Highlighting the Text Using react-text-annotate
          </Heading>
        </Box>
        <Box display="block" textAlign="center" p="0.5em" m="0.5em">
          <Input
            variant="outline"
            value={inputValue}
            onChange={handleSubmit}
            css={{
              padding: "0.5em",
              backgroundColor: "#f0f0f0",
              textAlign: "center",
            }}
            w="200px"
          />
        </Box>
        <Box display="block" textAlign="center" p="0.5em" m="0.5em">
          <Button
            onClick={() => setShowText(true)}
            css={{ margin: "0.5em", fontSize: "16px" }}
            color="teal.500"
            fontWeight="bold"
          >
            Enter
          </Button>
        </Box>
        <Box textAlign="center">
          {showText && (
            <>
              <TextAnnotator
                style={{
                  maxWidth: 500,
                  lineHeight: 1.5,
                }}
                content={inputValue}
                value={state.value}
                onChange={handleTextChange}
                getSpan={(span) => ({
                  ...span,
                  tag: state.tag,
                })}
              />
              {show && (
                <Accordion defaultIndex={[0]} allowMultiple>
                  <AccordionItem>
                    {" "}
                    <AccordionButton></AccordionButton>
                    <AccordionPanel pb={4}>
                      <TableContainer>
                        <Table>
                          <Thead >
                            <Tr>
                              <Th textAlign="center">Text</Th>
                              <Th textAlign="center">Type</Th>
                            </Tr>
                          </Thead>
                          <Tbody>
                            {state.value.map((value) => (
                              <tr key={value.start}>
                                <td>{value.text}</td>
                                {value.text && <td>Text</td>}
                              </tr>
                            ))}
                          </Tbody>
                        </Table>
                      </TableContainer>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              )}
            </>
          )}
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;

