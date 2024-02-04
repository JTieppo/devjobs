import { NextResponse, NextRequest } from 'next/server';
import { data } from '../../data';


export const POST = async (req: NextRequest) => {
    var ids = [];
    const dados = await req.json();
    console.log(dados.buscaLocal);
    if (dados.fullTime){
        data.map(company => company.contract == 'Full Time' ? ids.push(company.id) : null);
    }
    return NextResponse.json({
        ids   
    });
};