import { useRouter } from "next/router";
import { Box, Button } from "@skynexui/components";
import appConfig from "../config.json";

function Chat() {
    const route = useRouter();
    console.log(route)
    return (
        <>
            <h1>Bem vindo(a). <br /> Infelizmente essa pagina está incompleta no momento. <br /> Por favor volte mais tarde. <br />
            <Button
                label="Voltar para página anterior"
                styleSheet={{
                    marginTop: "40px"
                }}
                onClick={event => {
                    route.push("/")
                }}
                buttonColors={{
                    contrastColor: appConfig.theme.colors.neutrals["000"],
                    mainColor: appConfig.theme.colors.neutrals[300],
                    mainColorLight: appConfig.theme.colors.neutrals[500],
                    mainColorStrong: appConfig.theme.colors.neutrals[600],
                }}
                />
            </h1>
            
        </>
    );
}

export default Chat