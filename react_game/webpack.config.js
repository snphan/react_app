const path = require('path');

module.exports = {
    entry: {
        ticTacToeApp: './assets/tic_tac_toe.jsx',
        employeeListApp: './assets/employee_list.jsx',
        todoApp: './assets/todo.jsx'
    }, // path to our input file
    output: {
        filename: '[name]-bundle.js', // output bundle file name
        path: path.resolve(__dirname, './static'), // path to our Django static directory
    },
    
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: { presets: ["@babel/preset-env", "@babel/preset-react"] }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }
    ]
  }
};