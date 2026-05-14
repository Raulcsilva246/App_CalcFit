/*
  "sexo": "F",
    "imc": "Abaixo do peso",
    "gordura": "normal",
    "status": "Abaixo do peso, mas saudável",
    "descricao": "Seu percentual de gordura está adequado apesar do baixo peso.",
    "recomendacoes": [
      "Ganhar massa muscular",
      "Manter alimentação saudável"

*/

import * as FileSystem from 'expo-file-system/legacy';
import BaseDados from '../home/Basedados.json';

const caminho = FileSystem.documentDirectory + 'BD.json';


export async function salvarBanco(genero, imc, status) {

  try {

    let banco = {
      Log: []
    };

    // verifica se arquivo existe
    const info =
      await FileSystem.getInfoAsync(caminho);

    // se existir, lê conteúdo
    if (info.exists) {

      const conteudo =
        await FileSystem.readAsStringAsync(caminho);

      // evita parse em arquivo vazio
      if (conteudo.trim() !== '') {
        banco = JSON.parse(conteudo);
      }
    }

    // adiciona novo registro
    banco.Log.push({
      id: Date.now(),
      L_genero: genero,
      L_imc: imc,
      L_status: status,
    });

    // salva novamente
    await FileSystem.writeAsStringAsync(
      caminho,
      JSON.stringify(banco, null, 2)
    );

    console.log('SALVO');
    console.log(banco);

  } catch (erro) {

    console.log('ERRO AO SALVAR');
    console.log(erro);

  }
}

export async function limparBanco() {

  try {

    const bancoVazio = {
      Log: []
    };

    await FileSystem.writeAsStringAsync(
      caminho,
      JSON.stringify(bancoVazio, null, 2)
    );

    console.log('Banco limpo');

  } catch (erro) {

    console.log(erro);

  }
}

export async function lerBanco() {

  try {

    const info =
      await FileSystem.getInfoAsync(caminho);

    // se não existir retorna vazio
    if (!info.exists) {
      return [];
    }

    const conteudo =
      await FileSystem.readAsStringAsync(caminho);

    // evita erro em json vazio
    if (conteudo.trim() === '') {
      return [];
    }

    const banco = JSON.parse(conteudo);

    return banco.Log;

  } catch (erro) {

    console.log('ERRO AO LER');
    console.log(erro);

    return [];
  }
}
export function lerBase() {
  try {
    return BaseDados;
  } catch (erro) {
    console.log('ERRO AO LER');
    console.log(erro);
    return [];
  }
}

export function Search_Base(sexo, imc, gordura) {

  let resultMain = {};

  BaseDados.analise.forEach(function(base) {

    if (
      String(sexo).trim().toLowerCase() === String(base.sexo).trim().toLowerCase() &&
      String(imc).trim().toLowerCase() === String(base.imc).trim().toLowerCase() &&
      String(gordura).trim().toLowerCase() === String(base.gordura).trim().toLowerCase()
    ) {
      resultMain = {base};
    }

  });

  return resultMain;
}

export function HandleData(list){

  let status
  let descricao
  let recomendacoes = []
  let json = {}

  status = list.base.status
  descricao = list.base.descricao
  recomendacoes = list.base.recomendacoes
  json = {status,descricao,recomendacoes}


  return json
  
}