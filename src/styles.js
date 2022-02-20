// Testing whether I can store some common styling options in variables and import them

const colors = {
  standardBGColor: 'rgb(40, 35, 45)',
  standardTxtColor: 'rgba(200, 255, 255, 0.9)',
  standardBorder: '3px solid rgba(52, 168, 192, 0.8)',
  standardComponentBG: 'rgba(100, 100, 150, 0.8)',
};

const styles = {
  Standard: `
    background: ${colors.standardComponentBG};
    border: ${colors.standardBorder};
    border-radius: 10px;
    box-shadow: -3px 3px rgba140, 255, 255, 0.6);
    display: flex;
    flex-direction: column;
    height: 490px;
    max-width: 85%;
    margin: 20px;
    padding: 20px;

    h2 {
      text-shadow: -1px 1px 1px rgba(60, 230, 230, 0.8);
    },
  `,
};


module.exports = {
  colors,
  styles,
};
