import './index.scss';

export default function Ingerida() {

    function setupHydration() {
        const hydrationForm = document.getElementById("hydration-form");
        const logList = document.getElementById("log-list");
        const totalAmountElement = document.getElementById("total-amount");

        let totalAmount = 0;

        hydrationForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const date = document.getElementById("date").value;
            const amount = parseInt(document.getElementById("amount").value, 10);

            // Verifica se a quantidade de agua inserida é válida
            if (isNaN(amount) || amount <= 0) {
                alert("Insira uma quantidade válida de água.");
                return;
            }

            // Atualize a soma total de agua inserida
            totalAmount += amount;
            totalAmountElement.textContent = totalAmount;

            // Crie um novo item de registro para adicionar à lista de quantidade adicionada
            const logItem = document.createElement("li");
            logItem.textContent = `Data: ${date}, Quantidade: ${amount} ml`;

            // Adicione o item de registro à lista
            logList.appendChild(logItem);

            // Limpe os campos do formulário assim que termina de inserir os dados
            document.getElementById("date").value = "";
            document.getElementById("amount").value = "";
        });
    }

    document.addEventListener("DOMContentLoaded", setupHydration);


    return(
        
        <div className="form-ingerida">
            <div id="container">
                <h1>Registro de Hidratação</h1>
                <form id="hydration-form">
                    <label for="date">Data:</label>
                    <input type="date" id="date" required /><br /><br />
            
                    <label for="amount">Quantidade de Água (ml):</label>
                    <input type="number" id="amount" required /><br /><br />
            
                    <button type="submit">Registrar</button>
                </form>
        
                <div id="hydration-logs">
                    <h2>Registros de Hidratação</h2>
                    <ul id="log-list">
                    </ul>
                    <p>Total de Água Consumida: <span id="total-amount">0</span> ml</p>
                </div>
            </div>
        </div>
    );
}
