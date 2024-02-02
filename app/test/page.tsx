import Filtro from "../ui/filtro";
export default function Test(){
    const content = "esse é um exemplo de conteudo de texto";
    return(
        <div>
            <Filtro content={content}></Filtro>
        </div>
    );
}