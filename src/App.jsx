import React, { useState } from "react";
import Icons from "./Components/Icon";
// I
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardBody, Container, Button, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

// This will create an array of 9 elements which each value is empty.
const itemArray = new Array(9).fill("empty");

const App = () => {
  const [winMsg, setWinMsg] = useState("");

  const [isCross, setIsCross] = useState(false);

  const reloadGame = () => {
    //every time when game is reload this function function will works
    setWinMsg("");
    setIsCross(false);
    itemArray.fill("empty", 0, 9);
  };
  const checkWinner = () => {
    //
    if (
      itemArray[0] != "empty" &&
      itemArray[0] == itemArray[1] &&
      itemArray[1] == itemArray[2]
    ) {
      setWinMsg(`${itemArray[0]} won the Game!`);
    } else if (
      itemArray[3] != "empty" &&
      itemArray[3] == itemArray[4] &&
      itemArray[4] == itemArray[5]
    ) {
      setWinMsg(`${itemArray[3]} won the Game!`);
    } else if (
      itemArray[6] != "empty" &&
      itemArray[6] == itemArray[7] &&
      itemArray[7] == itemArray[8]
    ) {
      setWinMsg(`${itemArray[6]} won the Game!`);
    }
    // Column checking
    else if (
      itemArray[0] != "empty" &&
      itemArray[0] == itemArray[3] &&
      itemArray[3] == itemArray[6]
    ) {
      setWinMsg(`${itemArray[0]} won the Game!`);
    } else if (
      itemArray[1] != "empty" &&
      itemArray[1] == itemArray[4] &&
      itemArray[4] == itemArray[7]
    ) {
      setWinMsg(`${itemArray[1]} won the Game!`);
    } else if (
      itemArray[2] != "empty" &&
      itemArray[2] == itemArray[5] &&
      itemArray[5] == itemArray[7]
    ) {
      setWinMsg(`${itemArray[2]} won the Game!`);
      // Diagonal checking.
    } else if (
      itemArray[0] != "empty" &&
      itemArray[0] == itemArray[4] &&
      itemArray[4] == itemArray[8]
    ) {
      setWinMsg(`${itemArray[0]} won the Game!`);
    } else if (
      itemArray[2] != "empty" &&
      itemArray[2] == itemArray[4] &&
      itemArray[4] == itemArray[6]
    ) {
      setWinMsg(`${itemArray[2]} won the Game!`);
    }
  };
  const changeItem = (itemNumber) => {
    //
    if (winMsg) {
      return toast(winMsg, { type: "success" });
    }
    if ((itemArray[itemNumber] = isCross ? "cross" : "circle")) {
      setIsCross(!isCross);
    } else {
      return toast("already filled", { type: "error" });
    }
    checkWinner();
  };

  return (
    <>
      <Container className="p-5">
        <ToastContainer position="bottom-center" />
        <Row>
          <Col>
            {winMsg ? (
              <div className="mb-2 mt-2">
                <h1 className="white-text text-uppercase text-center">
                  {winMsg}
                </h1>
                <Button  block onClick={reloadGame} className="btn">
                  Reload Game
                </Button>
              </div>
            ) : (
              <h1 className="text-center white-text">
                {isCross ? "Cross" : "Circle"} Turns
              </h1>
            )}

            <div className="grid">
              {itemArray.map((element, index) => (
                <Card
                  key={index}
                  onClick={() => changeItem(index)}
                  className="icon" >
                  <CardBody className="box">
                    <Icons name={element}  />
                  </CardBody>
                </Card>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default App;
