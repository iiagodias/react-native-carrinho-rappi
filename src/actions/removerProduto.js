export default function removerProduto(produto){
    return {
        type: 'RMV_PRODUTO',
        produto
    };
}