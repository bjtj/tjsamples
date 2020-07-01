import React from "react";
import { createSocketComm } from "./socketComm";

interface ISelectedTile {
  layer: number;
  row: number;
  column: number;
  type: number;
}

interface IScores {
  player: number;
  opponent: number;
}

export function createState(inParentComponent: React.Component) {
  return {
    layout: <number[][][]>[],
    selectedTiles: <ISelectedTile[]>[],
    scores: <IScores>{ player: 0, opponent: 0 },
    gameState: <string>"awaitingOpponent",
    gameOutcome: <string>"",
    pid: <string>"",
    socketComm: <Function>createSocketComm(inParentComponent),
    timeSinceLastMatch: <number>0,

    handleMessage_connected: function (inPID: string) {
      this.setState({ pid: inPID });
    }.bind(inParentComponent),

    handleMessage_start: function (inLayout: number[][][]) {
      this.setState({
        timeSinceLastMatch: new Date().getTime(),
        layout: inLayout,
        gameState: "playing",
      });
    }.bind(inParentComponent),

    handleMessage_update: function (inPID: string, inScore: number) {
      if (inPID !== this.state.pid) {
        const scores: IScores = { ...this.state.scores };
        scores.opponent = inScore;
        this.setState({ scores: scores });
      }
    }.bind(inParentComponent),

    handleMessage_gameOver: function (inPID: string) {
      if (inPID === this.state.pid) {
        this.setState({
          gameState: "gameOver",
          gameOutcome: "**** YOU WON! ****",
        });
      } else {
        this.setState({
          gameState: "gameOver",
          gameOutcome: "Tough luck, you lost :(",
        });
      }
    }.bind(inParentComponent),

    tileClick: function (inLayer: number, inRow: number, inColumn: number) {
      if (this.state.gameState !== "playing") {
        return;
      }
      if (!this.state.canTileBeSelected(inLayer, inRow, inColumn)) {
        return;
      }

      const layout: number[][][] = this.state.layout.slice(0);
      const currentTileValue: number = layout[inLayer][inRow][inColumn];

      if (currentTileValue <= 0) {
        return;
      }
      const scores: IScores = { ...this.state.scores };
      let gameState: string = this.state.gameState;
      let timeSinceLastMatch: number = this.state.timeSinceLastMatch;
      let selectedTiles: ISelectedTile[] = this.state.selectedTiles.slice(0);

      if (currentTileValue > 1000) {
        layout[inLayer][inRow][inColumn] = currentTileValue - 1000;
        for (let i: number = 0; i < selectedTiles.length; i++) {
          const selectedTile: ISelectedTile = selectedTiles[i];
          if (
            selectedTile.layer == inLayer &&
            selectedTile.row == inRow &&
            selectedTile.column == inColumn
          ) {
            selectedTiles.splice(i, 1);
            break;
          }
        }
      } else {
        layout[inLayer][inRow][inColumn] = currentTileValue + 1000;
        selectedTiles.push({
          layer: inLayer,
          row: inRow,
          column: inColumn,
          type: currentTileValue,
        });
      }

      if (selectedTiles.length === 2) {
        if (
          selectedTiles[0].type === selectedTiles[1].type ||
          selectedTiles[0].type == 101 ||
          selectedTiles[1].type == 101
        ) {
          layout[selectedTiles[0].layer][selectedTiles[0].row][
            selectedTiles[0].column
          ] = -1;
          layout[selectedTiles[1].layer][selectedTiles[1].row][
            selectedTiles[1].column
          ] = -1;
          let calculatedPoints: number = 10;
          const now: number = new Date().getTime();
          const timeTaken: number = now - timeSinceLastMatch;
          const numHalfSeconds: number = Math.trunc(timeTaken / 500);
          calculatedPoints -= numHalfSeconds;
          if (calculatedPoints <= 0) {
            calculatedPoints = 1;
          }
          scores.player += calculatedPoints;
          timeSinceLastMatch = now;
          this.state.socketComm.send(
            `match_${this.state.pid}_${calculatedPoints}`
          );
          const anyMovesLeft: string = this.state.anyMovesLeft(layout);
          switch (anyMovesLeft) {
            case "no":
              gameState = "deadEnd";
              this.state.socketComm.send(`done_${this.state.pid}`);
              break;
            case "cleared":
              scores.player += 100;
              gameState = "cleared";
              this.state.socketComm.send(`match_${this.state.pid}_100`);
              this.state.socketComm.send(`done_${this.state.pid}`);
              break;
          }
        } else {
          layout[selectedTiles[0].layer][selectedTiles[0].row][
            selectedTiles[0].column
          ] =
            layout[selectedTiles[0].layer][selectedTiles[0].row][
              selectedTiles[0].column
            ] - 1000;
          layout[selectedTiles[1].layer][selectedTiles[1].row][
            selectedTiles[1].column
          ] =
            layout[selectedTiles[1].layer][selectedTiles[1].row][
              selectedTiles[1].column
            ] - 1000;
        }
        selectedTiles = [];
      }

      this.setState({
        gameState: gameState,
        layout: layout,
        selectedTiles: selectedTiles,
        scores: scores,
        timeSinceLastMatch: timeSinceLastMatch,
      });
    }.bind(inParentComponent),

    canTileBeSelected: function (
      inLayer: number,
      inRow: number,
      inColumn: number
    ): boolean {
      return (
        (inLayer == 4 ||
          this.state.layout[inLayer + 1][inRow][inColumn] <= 0) &&
        (inColumn === 0 ||
          inColumn === 14 ||
          this.state.layout[inLayer][inRow][inColumn - 1] <= 0 ||
          this.state.layout[inLayer][inRow][inColumn + 1] <= 0)
      );
    }.bind(inParentComponent),

    anyMovesLeft: function (inLayout: number[][][]): string {
      let numTiles: number = 0;
      const selectableTiles: number[] = [];
      for (let l: number = 0; l < inLayout.length; l++) {
        const layer = inLayout[l];
        for (let r: number = 0; r < layer.length; r++) {
          const row = layer[r];
          for (let c: number = 0; c < row.length; c++) {
            const tileVal: number = row[c];
            if (tileVal > 0) {
              numTiles += 1;
              if (this.state.canTileBeSelected(l, r, c)) {
                if (tileVal === 101) {
                  return "yes";
                }
                selectableTiles.push(tileVal);
              }
            }
          }
        }
      }

      if (numTiles === 0) {
        return "cleared";
      }

      const counts: number[] = [];
      for (let i: number = 0; i < selectableTiles.length; i++) {
        if (counts[selectableTiles[i]] === undefined) {
          counts[selectableTiles[i]] = 1;
        } else {
          counts[selectableTiles[i]]++;
        }
      }

      for (let i: number = 0; i < counts.length; i++) {
        if (counts[i] >= 2) {
          return "yes";
        }
      }
      return "no";
    }.bind(inParentComponent),
  };
}
