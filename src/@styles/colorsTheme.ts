interface IColors {
  primaria: string;
  secundaria: string;
  active: string;
  disabled: string;
  text: string;
  background: string;
  background2: string;
}

export const getColors = (): IColors => {
  return {
    primaria: '#0073FF',
    secundaria: '#105CE8',
    active: '#18A3FF',
    disabled: '#7E93FF',
    text: '#000',
    background: '#ffffff',
    background2: '#B3D9E6',
  };
};
