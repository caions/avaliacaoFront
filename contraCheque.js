const contraCheque = (salarioBruto, qtdFilhos, tempoCasa) => {

    let salarioLiq = salarioBruto;
    let bonusFilhos = qtdFilhos * 23;
    const inss = 0.08
    const valeTransporte = 0.06
    let bonCasa = 0
    salarioLiq += bonusFilhos;

    if (qtdFilhos >= 3 && qtdFilhos <= 5) {
        salarioLiq += salarioBruto * 0.03;
        bonusFilhos += salarioBruto * 0.03;
    }

    if (qtdFilhos > 5 && qtdFilhos <= 8) {
        salarioLiq += salarioBruto * 0.06;
        bonusFilhos += salarioBruto * 0.06;
    }

    if (qtdFilhos > 8) {
        salarioLiq += salarioBruto * 0.08;
        bonusFilhos += salarioBruto * 0.08;
    }


    if (tempoCasa >= 5 && tempoCasa <= 10) {
        salarioLiq += 150;
        bonCasa = 150
    }

    if (tempoCasa >= 11 && tempoCasa <= 16) {
        salarioLiq += 300;
        bonCasa = 300
    }

    if (tempoCasa > 16) {
        salarioLiq += 400;
        bonCasa = 400
    }

    let bonFilho = bonusFilhos
    let descInss = (salarioLiq * inss)
    let descVT = (salarioLiq * valeTransporte)
    salarioLiq -= descInss
    salarioLiq -= descVT

    let descricao =
        "Salario Bruto: +" + salarioBruto + "\n" +
        "Bonus Tempo de Casa: +" + bonCasa + "\n" +
        "Bonus Filhos: +" + bonFilho + "\n" +
        "Desconto INSS: -" + descInss
        + "\n" + "Desconto VT: -" + descVT
        + "\n" + "salario liquido: " + salarioLiq + "\n"
    return descricao

}

let folha = contraCheque(1000, 0, 7)
console.log(folha) 
