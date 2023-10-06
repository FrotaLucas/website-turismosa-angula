import { Produto } from './produto';

describe('Produto', () => {
  it('should create an instance', () => {
    const fabricacao = new Date('02-10-2000')
    const produto = new Produto('newName', 'newEmail', 1000, 0.10, fabricacao);
    expect(produto.nome).toEqual('newName');
    expect(produto.email).toEqual('newEmail')
    expect(produto.valor).toEqual(1000)
    expect(produto.desconto).toEqual(0.10)
    expect(produto.fabricacao).toEqual(fabricacao)



  });
});
