export function buildTodoCard(todos: string): any {
  const parsedTodos = JSON.parse(todos);

  const widgets = parsedTodos.map((todo: any, index: any) => {
    const icon = todo.type === "email" ? "EMAIL" : "INVITE";
    return {
      decoratedText: {
        icon: {
          knownIcon: icon,
        },
        text: todo.text,
        bottomLabel: todo.priority,
        switchControl: {
          name: `checkbox${index + 1}`,
          selected: false,
          controlType: "CHECK_BOX",
        },
      },
    };
  });

  const cardPayload = {
    cardsV2: [
      {
        cardId: "unique-card-id",
        card: {
          header: {
            title: "TODO-LIST",
            subtitle: "Your generated to-do list from email",
            imageUrl:
              "https://img.icons8.com/?size=100&id=48215&format=png&color=FFFFFF",
            imageType: "CIRCLE",
          },
          sections: [
            {
              collapsible: false,
              uncollapsibleWidgetsCount: 2,
              widgets,
            },
          ],
        },
      },
    ],
  };

  return cardPayload;
}
