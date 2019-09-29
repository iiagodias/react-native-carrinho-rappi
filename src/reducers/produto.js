import _ from "lodash";

const INITIAL_STATE = {
    produtos: [],
    total: 0,
    valorTotal: "0.00"
}

export default function produto(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "ADD_PRODUTO":
            var produto = _.find(state.produtos, { id: action.produto.id });
            if (!produto) {
                action.produto.quantidade = 1;
                return { ...state, produtos: [...state.produtos, action.produto], valorTotal: (parseFloat(state.valorTotal) + parseFloat(action.produto.price)).toFixed(2), total: state.total + 1 }
            } else {
                var produtosList = state.produtos;
                var index = _.findIndex(produtosList, { id: produto.id });
                produtosList[index].quantidade = produtosList[index].quantidade + 1;
                return { ...state, produtos: produtosList, valorTotal: (parseFloat(state.valorTotal) + parseFloat(produto.price)).toFixed(2), total: state.total + 1 }
            }
        case "RMV_PRODUTO":
            var produto = _.find(state.produtos, { id: action.produto.id });
            if (produto.quantidade == 1) {
                produtos = _.remove(state.produtos, function (item) {
                    return item.id != produto.id;
                });
                return { ...state, produtos: produtos, valorTotal: (parseFloat(state.valorTotal) - parseFloat(produto.price)).toFixed(2), total: state.total - 1 }
            }
            var produtosList = state.produtos;
            var index = _.findIndex(produtosList, { id: produto.id });
            produtosList[index].quantidade = produtosList[index].quantidade - 1;
            return { ...state, produtos: produtosList, valorTotal: (parseFloat(state.valorTotal) - parseFloat(produto.price)).toFixed(2), total: state.total - 1 }
        case "ESV_CARRINHO":
            return { ...state, produtos: [], valorTotal: "0.00", total: 0 }
        default:
            return state;
    }
}

