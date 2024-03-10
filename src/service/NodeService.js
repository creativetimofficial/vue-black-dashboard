export const NodeService = {
  getTreeNodesData() {
    return [
      {
        key: '0',
        label: 'Регион',
        icon: 'pi pi-globe',
        data: 'Регион',
        children: [
          {
            key: '0-0',
            label: 'Адыгея',
            data: 'Адыгея',
            children: [
              {
                key: '0-0-0',
                label: 'Тахтамукай',
                data: 'Тахтамукай',
              },
              {
                key: '0-0-1',
                label: 'Тлюстенхабль',
                data: 'Тлюстенхабль',
              },
              {
                key: '0-0-2',
                label: 'Хакуринохабль',
                data: 'Хакуринохабль',
              },
              {
                key: '0-0-3',
                label: 'Хатукай',
                data: 'Хатукай',
              },
              {
                key: '0-0-4',
                label: 'Ходзь',
                data: 'Ходзь',
              },

            ],
          },
          {
            key: '0-1',
            label: 'Алтайский край',
            data: 'Алтайский край',
            children: [
              {
                key: '0-1-0',
                label: 'Крутиха',
                data: 'Крутиха',
              },
              {
                key: '0-1-0',
                label: 'Курья',
                data: 'Курья',
              },
              {
                key: '0-1-0',
                label: 'Кытманово',
                data: 'Кытманово',
              },
              {
                key: '0-1-0',
                label: 'Лебяжье',
                data: 'Лебяжье',
              },
              {
                key: '0-1-0',
                label: 'Леньки',
                data: 'Леньки',
              },
            ],
          },
        ],
      },
    ];
  },

  getTreeNodesDataCategory() {
    return [
      {
        key: '0',
        label: 'Россия',
        data: 'Россия',
        children: [
          {
            key: '0-0',
            label: 'Адыгея',
            data: 'Адыгея',
            children: [
              {
                key: '0-0-0',
                label: 'Тахтамукай',
                data: 'Тахтамукай',
              },
              {
                key: '0-0-1',
                label: 'Тлюстенхабль',
                data: 'Тлюстенхабль',
              },
              {
                key: '0-0-2',
                label: 'Хакуринохабль',
                data: 'Хакуринохабль',
              },
              {
                key: '0-0-3',
                label: 'Хатукай',
                data: 'Хатукай',
              },
              {
                key: '0-0-4',
                label: 'Ходзь',
                data: 'Ходзь',
              },

            ],
          },
          {
            key: '0-1',
            label: 'Алтайский край',
            data: 'Алтайский край',
            children: [
              {
                key: '0-1-0',
                label: 'Крутиха',
                data: 'Крутиха',
              },
              {
                key: '0-1-0',
                label: 'Курья',
                data: 'Курья',
              },
              {
                key: '0-1-0',
                label: 'Кытманово',
                data: 'Кытманово',
              },
              {
                key: '0-1-0',
                label: 'Лебяжье',
                data: 'Лебяжье',
              },
              {
                key: '0-1-0',
                label: 'Леньки',
                data: 'Леньки',
              },
            ],
          },
        ],
      },
    ];
  },

  getTreeNodes() {
    return Promise.resolve(this.getTreeNodesData());
  },

  getTreeNodesCategory() {
    return Promise.resolve(this.getTreeNodesDataCategory());
  },
};
