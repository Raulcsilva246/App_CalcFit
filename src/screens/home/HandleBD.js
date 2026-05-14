import * as FileSystem from 'expo-file-system/legacy';
import * as FileSystem from 'expo-file-system/legacy';

const caminho = FileSystem.documentDirectory + 'BD.json';
const caminhoBase = FileSystem.documentDirectory + 'Basedados.json';

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

export async function LoadResult() {

  try {

    const info =
      await FileSystem.getInfoAsync(caminhoBase);

    // se não existir retorna vazio
    if (!info.exists) {
      return [];
    }

    const conteudo =
      await FileSystem.readAsStringAsync(caminhoBase);

    // evita erro em json vazio
    if (conteudo.trim() === '') {
      return [];
    }

    const banco = JSON.parse(conteudoBase);

    return banco.Log;

  } catch (erro) {

    console.log('ERRO AO LER');
    console.log(erro);

    return [];
  }
}

