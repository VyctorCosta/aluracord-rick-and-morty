import { Box, Button, Text, TextField, Image } from "@skynexui/components";
import appConfig from "../config.json";
import React from "react";
import { useRouter } from "next/router";
let check;

function changeCheck(value) {
  check = value
}

function Title(props) {
  const Tag = props.tag || "h1";

  return (
    <>
      <Tag>{props.children}</Tag>
      <p>{props.teste}</p>

      <style jsx>{`
        ${Tag} {
          color: ${appConfig.theme.colors.neutrals["000"]};
          font-size: 24px;
          font-weight: 600;
        }
      `}</style>
    </>
  );
}

function HomePage() {
  const route = useRouter();
  const [username, setUsername] = React.useState("VyctorCosta");

  return (
    <>
      <Box
        styleSheet={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        //   backgroundColor: appConfig.theme.colors.primary[500],
          backgroundImage: `url(/img/background.png)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
        }}
      >
        <Box
          styleSheet={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            width: "100%",
            maxWidth: "700px",
            borderRadius: "5px",
            padding: "32px",
            margin: "16px",
            boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
            backgroundColor: appConfig.theme.colors.neutrals[700],
          }}
        >
          {/* Formulário */}
          <Box
            as="form"
            onSubmit={(event) => {
              event.preventDefault();
              route.push({
                pathname: "/chat",
                query: { username }
              });
            }}
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: { xs: "100%", sm: "50%" },
              textAlign: "center",
              marginBottom: "32px",
            }}
          >
            <Title tag="h2">Boas vindas de volta!</Title>
            <Text
              variant="body3"
              styleSheet={{
                marginBottom: "32px",
                color: appConfig.theme.colors.neutrals[300],
              }}
            >
              {appConfig.name}
            </Text>

            <TextField
              value={username}
              onChange={(event) => {
                const inputValue = event.target.value;
                setUsername(inputValue);
              }}
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[200],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: appConfig.theme.colors.primary[500],
                  backgroundColor: appConfig.theme.colors.neutrals[800],
                },
              }}
            />
            <Button
              type="submit"
              label="Entrar"
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary[500],
                mainColorLight: appConfig.theme.colors.primary[1000],
                mainColorStrong: appConfig.theme.colors.primary[1100],
              }}
            />
          </Box>
          {/* Formulário */}

          {/* Photo Area */}
          <a href={`https://github.com/${username}`} target="_blank">
            <Box
                styleSheet={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                maxWidth: "200px",
                padding: "16px",
                backgroundColor: appConfig.theme.colors.neutrals[800],
                border: "1px solid",
                borderColor: appConfig.theme.colors.neutrals[999],
                borderRadius: "10px",
                flex: 1,
                minHeight: "240px",
                }}
            >
                <Image
                styleSheet={{
                    borderRadius: "50%",
                    marginBottom: "16px",
                }}
                src={`https://github.com/${username}.png`}
                onError={({currentTarget}) => currentTarget.src="/img/user_default.png"}
                />
                <Text
                variant="body4"
                styleSheet={{
                    color: appConfig.theme.colors.neutrals[200],
                    backgroundColor: appConfig.theme.colors.neutrals[900],
                    padding: "3px 10px",
                    borderRadius: "1000px",
                }}
                >
                {username}
                </Text>
            </Box>
          </a>
          {/* Photo Area */}

        </Box>
      </Box>
    </>
  );
}

export default HomePage;
