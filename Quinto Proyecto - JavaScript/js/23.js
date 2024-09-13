const metodoPago = 'transferencia';

switch (metodoPago) {
    case 'tarjeta':
        console.log('Pagando con tarjeta...');
        break;
    case 'transferencia':
        console.log('Pagando con transferencia...');
        break;
    case 'paypal':
        console.log('Pagando con PayPal...');
        break;
    default:
        console.log('Metodo de pago no válido.');
        break;
}