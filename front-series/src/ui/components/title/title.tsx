import {
    TitleStyled, SubtitleStyled
} from "./title.style"

interface TitleProps {
    title: string;
    subtitle?: string | JSX.Element;
}

export default function Title(props: TitleProps){
    return  <>
                <TitleStyled>{props.title}</TitleStyled>
                <SubtitleStyled>{props.subtitle}</SubtitleStyled>
            </>
}