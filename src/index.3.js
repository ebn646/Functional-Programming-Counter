import h from 'hyperscript';
import hh from 'hyperscript-helpers';

const {div, button } = hh(h);

const initModel = 0;

function view(dispatch, model){
    return div([
        div({ className: 'mv2' },`Count: ${model}`),
        button({ className: 'pv1 ph2 mr2', 
            onclick:() => dispatch('plus') }, '+'),
        button({ className: 'pv1 ph2', 
            onclick:() => dispatch('minus') }, '-'),
    ]);
}

function update(msg, model){
    switch  (msg){
        case 'plus':
            return model + 1;
        case 'minus':
            return model - 1;
        default:
            return model;
    }
}

// impure code below

function app(initModel, update, view, node){
    let model = initModel;
    let currentview = view(model);
    node.appendChild(currentview);
}

const rootNode = document.getElementById('app');

//rootNode.appendChild(view(update('plus',initModel)));

app(initModel, update, view, rootNode);