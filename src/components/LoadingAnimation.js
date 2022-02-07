import { Box, Text } from "@skynexui/components";
import appConfig from "../../config.json";

export function LoadingAnimation() {
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
        {(function() {
          const array = [];
          for (let i = 0; i < 5; i++) {
            array.push(
              <Text
                tag="li"
                key={i}
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
                >
                  <Box
                    styleSheet={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      display: "inline-block",
                      marginRight: "8px",
                      backgroundColor: appConfig.theme.colors.neutrals[350],
                    }}
                  />
                  <Text 
                    styleSheet={{
                      color: appConfig.theme.colors.neutrals[350],
                      backgroundColor: appConfig.theme.colors.neutrals[350],
                      borderRadius: "6%",
                    }}
                  >
                    {"TextoBase"}
                  </Text>
                  <Text
                    styleSheet={{
                      fontSize: "10px",
                      marginLeft: "8px",
                      color: appConfig.theme.colors.neutrals[350],
                      backgroundColor: appConfig.theme.colors.neutrals[350],
                      borderRadius: "20%",
                    }}
                    tag="span"
                  >
                    {"Data"}
                  </Text>
                  <Box
                    styleSheet={{
                      width: "20px",
                      height: "20px",
                      display: "inline-block",
                      marginLeft: "98%",
                      cursor: "pointer",
                      borderRadius: "16%",
                      backgroundColor: appConfig.theme.colors.neutrals[350],
                    }}
                  />
                </Box>
                <Box
                  styleSheet={{
                    width: "10%",
                    color: appConfig.theme.colors.neutrals[350],
                    backgroundColor: appConfig.theme.colors.neutrals[350],
                    borderRadius: "4%"
                  }}
                >
                  {"Messagem principal"}
                </Box>
              </Text>
            );
          }
          return array;
        })()}
      </Box>
    );
  }