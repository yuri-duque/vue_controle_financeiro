function mascara_numero(text) {
    if (text) {
        text += "";
        return text.replace(/[^0-9.]/g, "").replace(/(\..*)\./g, "$1");
    }

    return null;
}

function mascara_data(data) {
    if (data) {
        data += ""
        if (data.length > 10) {
            data = data.substring(0, data.length - 1);
            return data;
        }

        data = mascara_numero(data);

        data = data.replace(/\D/g, "");
        data = data.replace(/(\d{2})(\d)/, "$1/$2");
        data = data.replace(/(\d{2})(\d)/, "$1/$2");
        return data;
    }

    return null;
}

function formatar_data(text) {
    if (text) {
        text += "";
        var data = text.split("/", 3);
        var dia = data[0];
        var mes = data[1];
        var ano = data[2];

        return ano + "-" + mes + "-" + dia;
    }

    return null;
}

function formatar_data_ao_contrario(data) {
    if (data) {
        data += ""
        var text = data + "";
        data = text.split("-", 3);
        var dia = data[2].split("T")[0];
        var mes = data[1];
        var ano = data[0];

        return dia + "/" + mes + "/" + ano;
    }

    return null;
}

function number_format(value) {
    if (value) {
        value = value + "";

        if (value && value.includes("R$")) {
            value = value.replace("R$ ", "");
        }

        value = parseInt(value.replace(/[\D]+/g, ""));
        value = value + "";
        value = value.replace(/([0-9]{2})$/g, ",$1");

        if (value.length > 6) {
            value = value.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
        }

        if (value == "NaN") {
            return "R$ 0,00";
        }

        return "R$ " + value;
    }

    return null;
}

function remover_virgulaERS(text) {
    if (text && text.includes(",")) {
        text = text.replace(",", ".");
    }

    if (text && text.includes("R$ ")) {
        text = text.replace("R$ ", "");
    }

    return text;
}

function mascara_cep(text) {
    text = mascara_numero(text);

    if (text.length > 9) {
        text = text.substring(0, text.length - 1);
        return text;
    } else if (text.length > 5 && !text.includes("-")) {
        var t = text.substring(0, 5) + "-" + text.substring(5);
        return t;
    }

    return text;
}

function mascara_telefone(text) {
    text += "";

    if (text.length > 15) {
        text = text.substring(0, text.length - 1);
        return text;
    }

    text = text.replace(/\D/g, "");
    text = text.replace(/^(\d{2})(\d)/g, "($1) $2");
    text = text.replace(/(\d)(\d{4})$/, "$1-$2");
    return text;
}

function remover_ponto(text) {
    if (text && text.includes(".")) {
        var index = text.indexOf(".", 0);

        if (index == text.length - 2) {
            text += "0";
        }

        return text.replace(".", ",");
    } else {
        return text + ",00";
    }
}

let timer = null;

function debounce(func, wait) {
    return function () {
        clearTimeout(timer);
        timer = setTimeout(func, wait);
    }
}

export { mascara_numero, mascara_cep, mascara_data, formatar_data, formatar_data_ao_contrario, number_format, remover_virgulaERS, mascara_telefone, remover_ponto, debounce }