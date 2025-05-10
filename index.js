document.addEventListener("DOMContentLoaded", () => {
    const main = document.querySelector("main");
    const nav = document.querySelector("nav");

    const tabs = [
        {
            id: "about",
            title: "Про клуб",
            content: "AFC Richmond — вигаданий футбольний клуб із серіалу <strong>Ted Lasso</strong>."
        },
        {
            id: "players",
            title: "Гравці",
            players: [
                "⚡ Джеймі Тартт — швидкий та технічний нападник",
                "🦁 Рой Кент — грізний капітан з добрим серцем",
                "🌍 Сем Обісанья — захисник з Нігерії, з чудовим характером",
            ]
        },
        {
            id: "matches",
            title: "Матчі",
            content: "Наступний матч: AFC Richmond vs West Ham United — 05.05.2025"
        }
    ];

    // Створення вкладок
    tabs.forEach((tab, index) => {
        // Створюємо кнопку вкладки
        const button = document.createElement("button");
        button.className = "tab-btn";
        button.textContent = tab.title;
        button.setAttribute("data-tab", tab.id);
        nav.appendChild(button);

        // Створення секції
        const section = document.createElement("section");
        section.className = "tab" + (index === 0 ? " active" : ""); // Перша секція буде активною
        section.id = tab.id;

        const h2 = document.createElement("h2");
        h2.textContent = tab.title;
        section.appendChild(h2);

        if (tab.players) {
            const ul = document.createElement("ul");
            tab.players.forEach(player => {
                const li = document.createElement("li");
                li.textContent = player;
                ul.appendChild(li);
            });
            section.appendChild(ul);
        } else if (tab.content) {
            const p = document.createElement("p");
            p.innerHTML = tab.content;
            section.appendChild(p);
        }

        main.appendChild(section);
    });

    // Додавання функціоналу для перемикання вкладок
    const buttons = document.querySelectorAll(".tab-btn");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const tabId = button.getAttribute("data-tab");

            // Приховуємо всі секції
            const sections = document.querySelectorAll(".tab");
            sections.forEach(section => section.classList.remove("active"));

            // Показуємо вибрану секцію
            const activeSection = document.getElementById(tabId);
            activeSection.classList.add("active");

            // Виділяємо активну кнопку
            buttons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
        });
    });

    const btn = document.createElement("button");
    btn.id = "toggle-theme";
    btn.textContent = "Toggle Theme";
    document.body.appendChild(btn);
});