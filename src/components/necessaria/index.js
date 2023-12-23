import './index.scss';

export default function Necessaria(){


    function setupNecessaria() {
        const necessariaForm = document.getElementById("necessaria-form");
        const logList = document.getElementById("log-list");
        const totalAmountElement = document.getElementById("total-amount");

        let totalAmount = 0;

        necessariaForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const amount = parseInt(document.getElementById("amount").value, 10);

            // Verifica se a quantidade de agua inserida é válida
            // if (isNaN(amount) || amount <= 0) {
            //     alert("Insira uma quantidade válida de água.");
            //     return;
            // }

            // Atualize a soma total de agua inserida
            totalAmount = amount * 35;
            console.log(amount);
            totalAmountElement.textContent = totalAmount;

            // Crie um novo item de registro para adicionar à lista de quantidade adicionada
            const logItem = document.createElement("li");
            logItem.textContent = `Quantidade: ${amount} ml`;

            // Adicione o item de registro à lista
            logList.appendChild(logItem);

            // Limpe os campos do formulário assim que termina de inserir os dados
            document.getElementById("amount").value = "";
        });
    }

    document.addEventListener("DOMContentLoaded", setupNecessaria);



    return (

        <div>

            <h1> Cálculo da quantidade de água necessária </h1>  

            <div className="form-necessaria">
                <div id="container">
                    <h1>Digite seu peso atual:</h1>
                    <form id="necessaria-form">                
                        <label for="amount">Peso (kg):</label>
                        <input type="number" id="amount" required /><br /><br />
                        <button type="submit">Calcular</button>
                    </form>
        
                    <div id="necessaria-logs">
                        <h2>Resultado: </h2>
                        <ul id="log-list">
                        </ul>
                        <p>Total de Água Necessaria: <span id="total-amount">0</span> ml</p>
                    </div>
                </div>
            </div> 

        </div>

    );
}   

  