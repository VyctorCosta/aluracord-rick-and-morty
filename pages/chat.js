import React from "react";
import { Box, Text, TextField, Image, Button, Link } from "@skynexui/components";
import appConfig from "../config.json";
import { useRouter } from "next/router";

function Chat() {
  const [arrayMessage, setArrayMessage] = React.useState([]);
  const [message, setMessage] = React.useState("");
  const router = useRouter();
  const username = router.query.username;

  function handleNewMessage(newMessage) {
    setArrayMessage([
        {
          id: Math.random(),
          from: username,
          message: newMessage,
        },
      ...arrayMessage
    ]);
    setMessage("");
  }

  return (
    <Box
      styleSheet={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: appConfig.theme.colors.primary[500],
        backgroundImage: `url(/img/background.png)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
        color: appConfig.theme.colors.neutrals["000"],
      }}
    >
      <Box
        styleSheet={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
          borderRadius: "5px",
          backgroundColor: appConfig.theme.colors.neutrals[700],
          height: "100%",
          maxWidth: "95%",
          maxHeight: "95vh",
          padding: "32px",
        }}
      >
        <Header />
        <Box
          styleSheet={{
            position: "relative",
            display: "flex",
            flex: 1,
            height: "80%",
            backgroundColor: appConfig.theme.colors.neutrals[600],
            flexDirection: "column",
            borderRadius: "5px",
            padding: "16px",
          }}
        >
          <MessageList arrayMessage={arrayMessage} setArrayMessage={setArrayMessage}/>

          <Box
            as="form"
            styleSheet={{
              display: "flex",
              alignItems: "center",
              gap: "25px"
            }}
          >
            <a href={`https://github.com/${username}`} target="_blank">
                <Image
                styleSheet={{
                    width: "3.4rem",
                    height: "3.4rem",
                    borderRadius: "50%",
                    display: "inline-block",
                    marginRight: "4px",
                }}
                src={`https://github.com/${username}.png`}
                onError={({ target }) => target.src="/img/user_default.png"}
                />
            </a>
            <TextField
              value={message}
              placeholder="Insira sua mensagem aqui..."
              type="textarea"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              onKeyPress={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleNewMessage(message);
                }
              }}
              styleSheet={{
                width: "100%",
                border: "0",
                resize: "none",
                borderRadius: "5px",
                padding: "6px 8px",
                backgroundColor: appConfig.theme.colors.neutrals[800],
                marginRight: "12px",
                color: appConfig.theme.colors.neutrals[200],
              }}
            />
            <Button 
                label="Enviar"
                variant="tertiary"
                colorVariant="neutral"
                onClick={() => {
                    handleNewMessage(message);
                }}
                styleSheet={{
                    width: "80px",
                    height: "45px",
                    backgroundColor: appConfig.theme.colors.neutrals[800]
                }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function Header() {
  return (
    <>
      <Box
        styleSheet={{
          width: "100%",
          marginBottom: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text variant="heading5">Chat</Text>
        <Button
          variant="tertiary"
          colorVariant="neutral"
          label="Logout"
          href="/"
        />
      </Box>
    </>
  );
}

function MessageList({ arrayMessage, setArrayMessage }) {
  const removeMessageFromId = (id) => {
    const arrayTemp = arrayMessage.filter(el => {
      return el.id !== id
    })
    setArrayMessage([...arrayTemp]);
    console.log(arrayMessage)
  }

  return (
    <Box
      tag="ul"
      styleSheet={{
        overflow: "scroll",
        display: "flex",
        flexDirection: "column-reverse",
        flex: 1,
        color: appConfig.theme.colors.neutrals["000"],
        marginBottom: "16px",
      }}
    >
      {arrayMessage.map((objMessage) => {
        return (
          <Text
            tag="li"
            key={objMessage.id}
            styleSheet={{
              borderRadius: "5px",
              padding: "6px",
              marginBottom: "12px",
              hover: {
                backgroundColor: appConfig.theme.colors.neutrals[700],
              },
            }}
          >
            <Box
              styleSheet={{
                marginBottom: "8px",
              }}
              keyid={objMessage.id}
            >
              <Image
                styleSheet={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  display: "inline-block",
                  marginRight: "8px",
                }}
                src={`https://github.com/${objMessage.from}.png`}
              />
              <Text tag="strong">{objMessage.from}</Text>
              <Text
                styleSheet={{
                  fontSize: "10px",
                  marginLeft: "8px",
                  color: appConfig.theme.colors.neutrals[300],
                }}
                tag="span"
              >
                {new Date().toLocaleDateString("pt-BR", {hour: "numeric", minute: "numeric"})}
              </Text>
              <Image 
                styleSheet={{
                  width: "20px",
                  height: "20px",
                  display: "inline-block",
                  marginLeft: "98%",
                  cursor: "pointer"

                }}
                onClick={e => {
                  const id = Number(e.target.parentElement.attributes.keyid.value);
                  removeMessageFromId(id);

                }}
                src={"/img/x.png"}
              />
            </Box>
            {objMessage.message}
          </Text>
        );
      })}
    </Box>
  );
}

export default Chat;
