import { Button } from "@chakra-ui/react"
import { MouseEventHandler } from "react"

interface IDButton {
    onClick: MouseEventHandler
}

export const DButton = ({ onClick }: IDButton) => {
    return (
        <Button
        onClick={onClick}
        colorScheme='purple'
        width={'100%'}
        marginTop={'1rem'}
    >
        Entrar
        </Button>
    )
}