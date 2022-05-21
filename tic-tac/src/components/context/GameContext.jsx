import {createContext, useContext, useEffect, useState} from "react";
import {calcCpuMoves, calcWinner} from "../../helpers/calcSquares";
import {ModalContext} from "../context/ModalContext";
const GameContext = createContext()

const GameState = (props) => {
    const {showModal, setModalMode, hideModal} = useContext(ModalContext)

    const [screen,
        setScreen] = useState('start'); //start || game
    const [activeUser,
        setActiveUser] = useState("x") //x || o
    const [playMode,
        setPlayMode] = useState('cpu') //user || cpu
    const [squares,
        setSquares] = useState(new Array(9).fill(''));
    const [xnext,
        setXnext] = useState(false)

    const [winner,
        setWinner] = useState(null);
    const [winnerLine,
        setWinnerLine] = useState(null);
    const [ties,
        setTies] = useState({x: 0, o: 0})
    useEffect(() => {
        checkNoWinner()
        const currentUser = xnext
            ? 'o'
            : 'x'
        if (playMode === 'cpu' && currentUser !== activeUser && !winner) {
            cpuNextMove(squares);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [xnext, winner])
    const changePlayMode = mode => {
        setPlayMode(mode);
        setScreen("game")
    }
    const handleSquareClick = (index) => {
        if (squares[index] || winner) {
            return;
        }
        const currentUser = xnext
            ? 'o'
            : 'x'
        if (playMode === 'cpu' && currentUser !== activeUser) {
            return
        }
        let ns = [...squares]
        ns[index] = !xnext
            ? 'x'
            : 'o'
        setSquares(ns);
        setXnext(!xnext);

        //check winner
        checkWinner(ns);
    };
    const checkWinner = (ns) => {
        // alert("winner");
        const isWinner = calcWinner(ns);
        if (isWinner) {
            setWinner(isWinner.winner);
            setWinnerLine(isWinner.line);
            const nties = {
                ...ties
            };
            nties[isWinner.winner] += 1;
            setTies(nties);
            showModal();
            setModalMode("winner");

        }
    };
    const handleReset = () => {

        setSquares(new Array(9).fill(""));
        setXnext(false);
        setWinner(null);
        setWinnerLine(null);
        setActiveUser("x");
        setTies({x: 0, o: 0});
        hideModal();
        setScreen("start");

    }
    const handleNextRound = () => {
        setSquares(new Array(9).fill(""));
        setXnext(winner === "x");
        setWinnerLine(null);
        hideModal();
        setWinner(null);
    }
    const checkNoWinner = () => {
        const moves = squares.filter((sq) => sq === "");
        if (moves.length === 0) {
            setWinner("no");
            showModal();
            setModalMode("winner");
        }
    };

    const cpuNextMove =(sqrs) => {
        let bestmove = calcCpuMoves(sqrs, activeUser );
        let ns = [...squares];
        ns[bestmove] = !xnext ? "x" : "o";
        setSquares(ns);
        setXnext(!xnext);
        checkWinner(ns);
    }
    const resetGame=()=>{
        showModal();
        setModalMode("start")
    }
    return (
        <GameContext.Provider
            value={{
            screen,
            activeUser,
            setActiveUser,
            changePlayMode,
            squares,
            ties,
            xnext,
            winnerLine,
            winner,
            handleSquareClick,
            handleReset,
            resetGame,
            playMode,
            handleNextRound
        }}>
            {props.children}
        </GameContext.Provider>
    )
}
export {GameContext, GameState}