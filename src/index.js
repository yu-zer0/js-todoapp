import "./style.css";

const onClickAdd = () => {
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";   

    // li生成
    const li = document.createElement("li");

    // div生成
    const div = document.createElement("div");
    div.className = "list-row";

    // p生成
    const p = document.createElement("p");
    p.className = "todo-item";
    p.innerText = inputText;

    //階層構造
    li.appendChild(div);
    div.appendChild(p);

    // 未完了リストに追加
    document.getElementById("incomplete-list").appendChild(li);
};

document.getElementById("add-button").addEventListener("click", onClickAdd);