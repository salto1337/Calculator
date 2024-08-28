import { useState } from "react";

function Calculator() {
	const [input, setInput] = useState("");

	function handleClick(value) {
		setInput((prev) => prev + value);
	}

	function handleClear() {
		setInput("");
	}

	function handleEqual() {
		try {
			setInput(eval(input).toString());
		} catch (error) {
			setInput(error);
		}
	}

	return (
		<div className="flex items-center justify-center h-screen">
			<div className="bg-blue-800 p-8 rounded-lg shadow-md w-80">
				<div className="mb-4">
					<input
						type="text"
						value={input}
						className="w-full p-2 mb-2 text-lg border border-gray-300 rounded"
						readOnly
					/>
				</div>
				<div className="grid grid-cols-4 gap-2">
					{["7", "8", "9", "/"].map((char) => (
						<button
							key={char}
							onClick={() => handleClick(char)}
							className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
							{char}
						</button>
					))}
					{["4", "5", "6", "*"].map((char) => (
						<button
							key={char}
							onClick={() => handleClick(char)}
							className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
							{char}
						</button>
					))}
					{["1", "2", "3", "-"].map((char) => (
						<button
							key={char}
							onClick={() => handleClick(char)}
							className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
							{char}
						</button>
					))}
					{["0", ".", "=", "+"].map((char) => (
						<button
							key={char}
							onClick={() => (char === "=" ? handleEqual() : handleClick(char))}
							className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
							{char}
						</button>
					))}
					<button
						onClick={handleClear}
						className="col-span-4 p-2 bg-blue-400 text-white rounded hover:bg-blue-500">
						Clear
					</button>
				</div>
			</div>
		</div>
	);
}

export default Calculator;
