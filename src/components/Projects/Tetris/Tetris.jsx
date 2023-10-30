import React from 'react';

class Tetris extends React.Component {

    tablero =[]

    constructor(props) {
        super(props);
        this.state = {
            rows: 20,
            columns: 10,
        };
    }

    renderGrid() {
        const { rows, columns } = this.state;
        const cellSize = 30;
        const cellStyle = {
            width: `${cellSize}px`,
            height: `${cellSize}px`,
        };
        const grid = [];

        for (let i = 0; i < rows; i++) {
            const row = [];
            for (let j = 0; j < columns; j++) {
                row.push(
                    <div key={j} className="cell bg-gray-900 border border-gray-800" style={cellStyle}></div>
                );
            }
            grid.push(
                <div key={i} className="row flex">
                    {row}
                </div>
            );
        }

        return grid;
    }

    render() {
        return (
            <div>
                <h1 className="text-4xl text-white mb-4">Tetris Game</h1>
                <div className="tetris-grid">
                    {this.renderGrid()}
                </div>
                <div className="my-4">
                    <button className="bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Start Game
                    </button>
                </div>
            </div>
        );
    }
}


export default Tetris;