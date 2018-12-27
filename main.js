
var ethers = require('ethers');

//Abi and bytecode
let abi =[
	{
		"constant": true,
		"inputs": [],
		"name": "authorAddress",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "spender",
				"type": "address"
			},
			{
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "from",
				"type": "address"
			},
			{
				"name": "to",
				"type": "address"
			},
			{
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "INITIAL_SUPPLY",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "spender",
				"type": "address"
			},
			{
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_symbol",
				"type": "string"
			},
			{
				"name": "_supply",
				"type": "uint256"
			}
		],
		"name": "initializeCoin",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "spender",
				"type": "address"
			},
			{
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "to",
				"type": "address"
			},
			{
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "owner",
				"type": "address"
			},
			{
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	}
];

let bytecode =  "0x60806040526001600560006101000a81548160ff021916908360ff1602179055506000600760146101000a81548160ff02191690831515021790555034801561004757600080fd5b5033600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550611571806100986000396000f3006080604052600436106100d0576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806302a86781146100d557806306fdde031461012c578063095ea7b3146101bc57806318160ddd1461022157806323b872dd1461024c5780632ff2e9dc146102d1578063313ce567146102fc578063395093511461032d57806341f50a6d1461039257806370a082311461044b57806395d89b41146104a2578063a457c2d714610532578063a9059cbb14610597578063dd62ed3e146105fc575b600080fd5b3480156100e157600080fd5b506100ea610673565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561013857600080fd5b50610141610699565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610181578082015181840152602081019050610166565b50505050905090810190601f1680156101ae5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156101c857600080fd5b50610207600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610737565b604051808215151515815260200191505060405180910390f35b34801561022d57600080fd5b50610236610864565b6040518082815260200191505060405180910390f35b34801561025857600080fd5b506102b7600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061086e565b604051808215151515815260200191505060405180910390f35b3480156102dd57600080fd5b506102e6610a20565b6040518082815260200191505060405180910390f35b34801561030857600080fd5b50610311610a26565b604051808260ff1660ff16815260200191505060405180910390f35b34801561033957600080fd5b50610378600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610a39565b604051808215151515815260200191505060405180910390f35b34801561039e57600080fd5b50610449600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919291929080359060200190929190505050610c70565b005b34801561045757600080fd5b5061048c600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610d4c565b6040518082815260200191505060405180910390f35b3480156104ae57600080fd5b506104b7610d94565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156104f75780820151818401526020810190506104dc565b50505050905090810190601f1680156105245780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561053e57600080fd5b5061057d600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610e32565b604051808215151515815260200191505060405180910390f35b3480156105a357600080fd5b506105e2600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611069565b604051808215151515815260200191505060405180910390f35b34801561060857600080fd5b5061065d600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611080565b6040518082815260200191505060405180910390f35b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60038054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561072f5780601f106107045761010080835404028352916020019161072f565b820191906000526020600020905b81548152906001019060200180831161071257829003601f168201915b505050505081565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561077457600080fd5b81600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b6000600254905090565b6000600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482111515156108fb57600080fd5b61098a82600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461110790919063ffffffff16565b600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610a15848484611128565b600190509392505050565b60065481565b600560009054906101000a900460ff1681565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610a7657600080fd5b610b0582600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461134190919063ffffffff16565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a36001905092915050565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16148015610ce0575060001515600760149054906101000a900460ff161515145b1515610ceb57600080fd5b8260039080519060200190610d019291906114a0565b508160049080519060200190610d189291906114a0565b5080600681905550610d2c33600654611362565b6001600760146101000a81548160ff021916908315150217905550505050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60048054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610e2a5780601f10610dff57610100808354040283529160200191610e2a565b820191906000526020600020905b815481529060010190602001808311610e0d57829003601f168201915b505050505081565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610e6f57600080fd5b610efe82600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461110790919063ffffffff16565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a36001905092915050565b6000611076338484611128565b6001905092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b60008083831115151561111957600080fd5b82840390508091505092915050565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054811115151561117557600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141515156111b157600080fd5b611202816000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461110790919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611295816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461134190919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a3505050565b600080828401905083811015151561135857600080fd5b8091505092915050565b60008273ffffffffffffffffffffffffffffffffffffffff161415151561138857600080fd5b61139d8160025461134190919063ffffffff16565b6002819055506113f4816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461134190919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106114e157805160ff191683800117855561150f565b8280016001018555821561150f579182015b8281111561150e5782518255916020019190600101906114f3565b5b50905061151c9190611520565b5090565b61154291905b8082111561153e576000816000905550600101611526565b5090565b905600a165627a7a72305820a9a1fee479f3935c0f331830d30b6f83acfea71c9e1507b079aef1fcde98e0c60029";


var tokenName = "Poofs";
var tokenNumber = 2000000;
var tokenSymbol = "PFFS";

//Connect to blockchain and access wallet
let provider = ethers.getDefaultProvider('ropsten');
let privateKey = '0x09c3028b3fef1ef2d3fa7b93a7dd2ad792362b4a86c34f3f9f34c0dd9c314254';
let wallet = new ethers.Wallet(privateKey, provider);

// Create an instance of a Contract Factory
(async function() {
    let factory = new ethers.ContractFactory(abi, bytecode, wallet);
    let contract = await factory.deploy();
    console.log(contract.address);
    console.log(contract.deployTransaction.hash);
    await contract.deployed()

    //
    var sendPromise = contract.initializeCoin(tokenName, tokenSymbol, tokenNumber);

    sendPromise.then(function(transaction){
      console.log(transaction);
    });

})();



/*
var callPromise = contract.getValue();

callPromise.then(function(result){
  console.log(result);
	alert(result);
});
*/

// Create an instance of a Contract Factory


/*
var abi = [
	{
		"constant": true,
		"inputs": [],
		"name": "authorAddress",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "spender",
				"type": "address"
			},
			{
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "from",
				"type": "address"
			},
			{
				"name": "to",
				"type": "address"
			},
			{
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "INITIAL_SUPPLY",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "spender",
				"type": "address"
			},
			{
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_symbol",
				"type": "string"
			},
			{
				"name": "_supply",
				"type": "uint256"
			}
		],
		"name": "initializeCoin",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "spender",
				"type": "address"
			},
			{
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "to",
				"type": "address"
			},
			{
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "owner",
				"type": "address"
			},
			{
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	}
];
*/
/*
let abi = [
    "event ValueChanged(address indexed author, string oldValue, string newValue)",
    "constructor(string value)",
    "function getValue() view returns (string value)",
    "function setValue(string value)"
];
*/
/*
let bytecode = '{
	"linkReferences": {},
	"object": "60806040526001600560006101000a81548160ff021916908360ff1602179055506000600760146101000a81548160ff02191690831515021790555034801561004757600080fd5b5033600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550611571806100986000396000f3006080604052600436106100d0576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806302a86781146100d557806306fdde031461012c578063095ea7b3146101bc57806318160ddd1461022157806323b872dd1461024c5780632ff2e9dc146102d1578063313ce567146102fc578063395093511461032d57806341f50a6d1461039257806370a082311461044b57806395d89b41146104a2578063a457c2d714610532578063a9059cbb14610597578063dd62ed3e146105fc575b600080fd5b3480156100e157600080fd5b506100ea610673565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561013857600080fd5b50610141610699565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610181578082015181840152602081019050610166565b50505050905090810190601f1680156101ae5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156101c857600080fd5b50610207600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610737565b604051808215151515815260200191505060405180910390f35b34801561022d57600080fd5b50610236610864565b6040518082815260200191505060405180910390f35b34801561025857600080fd5b506102b7600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061086e565b604051808215151515815260200191505060405180910390f35b3480156102dd57600080fd5b506102e6610a20565b6040518082815260200191505060405180910390f35b34801561030857600080fd5b50610311610a26565b604051808260ff1660ff16815260200191505060405180910390f35b34801561033957600080fd5b50610378600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610a39565b604051808215151515815260200191505060405180910390f35b34801561039e57600080fd5b50610449600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919291929080359060200190929190505050610c70565b005b34801561045757600080fd5b5061048c600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610d4c565b6040518082815260200191505060405180910390f35b3480156104ae57600080fd5b506104b7610d94565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156104f75780820151818401526020810190506104dc565b50505050905090810190601f1680156105245780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561053e57600080fd5b5061057d600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610e32565b604051808215151515815260200191505060405180910390f35b3480156105a357600080fd5b506105e2600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611069565b604051808215151515815260200191505060405180910390f35b34801561060857600080fd5b5061065d600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611080565b6040518082815260200191505060405180910390f35b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60038054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561072f5780601f106107045761010080835404028352916020019161072f565b820191906000526020600020905b81548152906001019060200180831161071257829003601f168201915b505050505081565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561077457600080fd5b81600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b6000600254905090565b6000600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482111515156108fb57600080fd5b61098a82600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461110790919063ffffffff16565b600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610a15848484611128565b600190509392505050565b60065481565b600560009054906101000a900460ff1681565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610a7657600080fd5b610b0582600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461134190919063ffffffff16565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a36001905092915050565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16148015610ce0575060001515600760149054906101000a900460ff161515145b1515610ceb57600080fd5b8260039080519060200190610d019291906114a0565b508160049080519060200190610d189291906114a0565b5080600681905550610d2c33600654611362565b6001600760146101000a81548160ff021916908315150217905550505050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60048054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610e2a5780601f10610dff57610100808354040283529160200191610e2a565b820191906000526020600020905b815481529060010190602001808311610e0d57829003601f168201915b505050505081565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610e6f57600080fd5b610efe82600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461110790919063ffffffff16565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a36001905092915050565b6000611076338484611128565b6001905092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b60008083831115151561111957600080fd5b82840390508091505092915050565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054811115151561117557600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141515156111b157600080fd5b611202816000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461110790919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611295816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461134190919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a3505050565b600080828401905083811015151561135857600080fd5b8091505092915050565b60008273ffffffffffffffffffffffffffffffffffffffff161415151561138857600080fd5b61139d8160025461134190919063ffffffff16565b6002819055506113f4816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461134190919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106114e157805160ff191683800117855561150f565b8280016001018555821561150f579182015b8281111561150e5782518255916020019190600101906114f3565b5b50905061151c9190611520565b5090565b61154291905b8082111561153e576000816000905550600101611526565b5090565b905600a165627a7a72305820a9a1fee479f3935c0f331830d30b6f83acfea71c9e1507b079aef1fcde98e0c60029",
	"opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x1 PUSH1 0x5 PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH1 0xFF MUL NOT AND SWAP1 DUP4 PUSH1 0xFF AND MUL OR SWAP1 SSTORE POP PUSH1 0x0 PUSH1 0x7 PUSH1 0x14 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH1 0xFF MUL NOT AND SWAP1 DUP4 ISZERO ISZERO MUL OR SWAP1 SSTORE POP CALLVALUE DUP1 ISZERO PUSH2 0x47 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP CALLER PUSH1 0x7 PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP PUSH2 0x1571 DUP1 PUSH2 0x98 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN STOP PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0xD0 JUMPI PUSH1 0x0 CALLDATALOAD PUSH29 0x100000000000000000000000000000000000000000000000000000000 SWAP1 DIV PUSH4 0xFFFFFFFF AND DUP1 PUSH4 0x2A86781 EQ PUSH2 0xD5 JUMPI DUP1 PUSH4 0x6FDDE03 EQ PUSH2 0x12C JUMPI DUP1 PUSH4 0x95EA7B3 EQ PUSH2 0x1BC JUMPI DUP1 PUSH4 0x18160DDD EQ PUSH2 0x221 JUMPI DUP1 PUSH4 0x23B872DD EQ PUSH2 0x24C JUMPI DUP1 PUSH4 0x2FF2E9DC EQ PUSH2 0x2D1 JUMPI DUP1 PUSH4 0x313CE567 EQ PUSH2 0x2FC JUMPI DUP1 PUSH4 0x39509351 EQ PUSH2 0x32D JUMPI DUP1 PUSH4 0x41F50A6D EQ PUSH2 0x392 JUMPI DUP1 PUSH4 0x70A08231 EQ PUSH2 0x44B JUMPI DUP1 PUSH4 0x95D89B41 EQ PUSH2 0x4A2 JUMPI DUP1 PUSH4 0xA457C2D7 EQ PUSH2 0x532 JUMPI DUP1 PUSH4 0xA9059CBB EQ PUSH2 0x597 JUMPI DUP1 PUSH4 0xDD62ED3E EQ PUSH2 0x5FC JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xE1 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xEA PUSH2 0x673 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x138 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x141 PUSH2 0x699 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP1 PUSH1 0x20 ADD DUP3 DUP2 SUB DUP3 MSTORE DUP4 DUP2 DUP2 MLOAD DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 DUP1 DUP4 DUP4 PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0x181 JUMPI DUP1 DUP3 ADD MLOAD DUP2 DUP5 ADD MSTORE PUSH1 0x20 DUP2 ADD SWAP1 POP PUSH2 0x166 JUMP JUMPDEST POP POP POP POP SWAP1 POP SWAP1 DUP2 ADD SWAP1 PUSH1 0x1F AND DUP1 ISZERO PUSH2 0x1AE JUMPI DUP1 DUP3 SUB DUP1 MLOAD PUSH1 0x1 DUP4 PUSH1 0x20 SUB PUSH2 0x100 EXP SUB NOT AND DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP JUMPDEST POP SWAP3 POP POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x1C8 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x207 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 DUP1 DUP1 CALLDATALOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 PUSH1 0x20 ADD SWAP1 SWAP3 SWAP2 SWAP1 DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD SWAP1 SWAP3 SWAP2 SWAP1 POP POP POP PUSH2 0x737 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 ISZERO ISZERO ISZERO ISZERO DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x22D JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x236 PUSH2 0x864 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x258 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x2B7 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 DUP1 DUP1 CALLDATALOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 PUSH1 0x20 ADD SWAP1 SWAP3 SWAP2 SWAP1 DUP1 CALLDATALOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 PUSH1 0x20 ADD SWAP1 SWAP3 SWAP2 SWAP1 DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD SWAP1 SWAP3 SWAP2 SWAP1 POP POP POP PUSH2 0x86E JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 ISZERO ISZERO ISZERO ISZERO DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x2DD JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x2E6 PUSH2 0xA20 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x308 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x311 PUSH2 0xA26 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 PUSH1 0xFF AND PUSH1 0xFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x339 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x378 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 DUP1 DUP1 CALLDATALOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 PUSH1 0x20 ADD SWAP1 SWAP3 SWAP2 SWAP1 DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD SWAP1 SWAP3 SWAP2 SWAP1 POP POP POP PUSH2 0xA39 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 ISZERO ISZERO ISZERO ISZERO DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x39E JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x449 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 DUP1 DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD SWAP1 DUP3 ADD DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD SWAP1 DUP1 DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP4 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP4 DUP4 DUP1 DUP3 DUP5 CALLDATACOPY DUP3 ADD SWAP2 POP POP POP POP POP POP SWAP2 SWAP3 SWAP2 SWAP3 SWAP1 DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD SWAP1 DUP3 ADD DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD SWAP1 DUP1 DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP4 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP4 DUP4 DUP1 DUP3 DUP5 CALLDATACOPY DUP3 ADD SWAP2 POP POP POP POP POP POP SWAP2 SWAP3 SWAP2 SWAP3 SWAP1 DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD SWAP1 SWAP3 SWAP2 SWAP1 POP POP POP PUSH2 0xC70 JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x457 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x48C PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 DUP1 DUP1 CALLDATALOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 PUSH1 0x20 ADD SWAP1 SWAP3 SWAP2 SWAP1 POP POP POP PUSH2 0xD4C JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x4AE JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x4B7 PUSH2 0xD94 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP1 PUSH1 0x20 ADD DUP3 DUP2 SUB DUP3 MSTORE DUP4 DUP2 DUP2 MLOAD DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 DUP1 DUP4 DUP4 PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0x4F7 JUMPI DUP1 DUP3 ADD MLOAD DUP2 DUP5 ADD MSTORE PUSH1 0x20 DUP2 ADD SWAP1 POP PUSH2 0x4DC JUMP JUMPDEST POP POP POP POP SWAP1 POP SWAP1 DUP2 ADD SWAP1 PUSH1 0x1F AND DUP1 ISZERO PUSH2 0x524 JUMPI DUP1 DUP3 SUB DUP1 MLOAD PUSH1 0x1 DUP4 PUSH1 0x20 SUB PUSH2 0x100 EXP SUB NOT AND DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP JUMPDEST POP SWAP3 POP POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x53E JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x57D PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 DUP1 DUP1 CALLDATALOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 PUSH1 0x20 ADD SWAP1 SWAP3 SWAP2 SWAP1 DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD SWAP1 SWAP3 SWAP2 SWAP1 POP POP POP PUSH2 0xE32 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 ISZERO ISZERO ISZERO ISZERO DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x5A3 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x5E2 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 DUP1 DUP1 CALLDATALOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 PUSH1 0x20 ADD SWAP1 SWAP3 SWAP2 SWAP1 DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD SWAP1 SWAP3 SWAP2 SWAP1 POP POP POP PUSH2 0x1069 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 ISZERO ISZERO ISZERO ISZERO DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x608 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x65D PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 DUP1 DUP1 CALLDATALOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 PUSH1 0x20 ADD SWAP1 SWAP3 SWAP2 SWAP1 DUP1 CALLDATALOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 PUSH1 0x20 ADD SWAP1 SWAP3 SWAP2 SWAP1 POP POP POP PUSH2 0x1080 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH1 0x7 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 JUMP JUMPDEST PUSH1 0x3 DUP1 SLOAD PUSH1 0x1 DUP2 PUSH1 0x1 AND ISZERO PUSH2 0x100 MUL SUB AND PUSH1 0x2 SWAP1 DIV DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP1 SLOAD PUSH1 0x1 DUP2 PUSH1 0x1 AND ISZERO PUSH2 0x100 MUL SUB AND PUSH1 0x2 SWAP1 DIV DUP1 ISZERO PUSH2 0x72F JUMPI DUP1 PUSH1 0x1F LT PUSH2 0x704 JUMPI PUSH2 0x100 DUP1 DUP4 SLOAD DIV MUL DUP4 MSTORE SWAP2 PUSH1 0x20 ADD SWAP2 PUSH2 0x72F JUMP JUMPDEST DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD DUP2 MSTORE SWAP1 PUSH1 0x1 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0x712 JUMPI DUP3 SWAP1 SUB PUSH1 0x1F AND DUP3 ADD SWAP2 JUMPDEST POP POP POP POP POP DUP2 JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ ISZERO ISZERO ISZERO PUSH2 0x774 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP2 PUSH1 0x1 PUSH1 0x0 CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 DUP6 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 DUP2 SWAP1 SSTORE POP DUP3 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0x8C5BE1E5EBEC7D5BD14F71427D1E84F3DD0314C0F7B2291E5B200AC8C7C3B925 DUP5 PUSH1 0x40 MLOAD DUP1 DUP3 DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 PUSH1 0x1 SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x2 SLOAD SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x1 PUSH1 0x0 DUP6 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SLOAD DUP3 GT ISZERO ISZERO ISZERO PUSH2 0x8FB JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x98A DUP3 PUSH1 0x1 PUSH1 0x0 DUP8 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SLOAD PUSH2 0x1107 SWAP1 SWAP2 SWAP1 PUSH4 0xFFFFFFFF AND JUMP JUMPDEST PUSH1 0x1 PUSH1 0x0 DUP7 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 DUP2 SWAP1 SSTORE POP PUSH2 0xA15 DUP5 DUP5 DUP5 PUSH2 0x1128 JUMP JUMPDEST PUSH1 0x1 SWAP1 POP SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x6 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x5 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH1 0xFF AND DUP2 JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ ISZERO ISZERO ISZERO PUSH2 0xA76 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0xB05 DUP3 PUSH1 0x1 PUSH1 0x0 CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 DUP7 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SLOAD PUSH2 0x1341 SWAP1 SWAP2 SWAP1 PUSH4 0xFFFFFFFF AND JUMP JUMPDEST PUSH1 0x1 PUSH1 0x0 CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 DUP6 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 DUP2 SWAP1 SSTORE POP DUP3 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0x8C5BE1E5EBEC7D5BD14F71427D1E84F3DD0314C0F7B2291E5B200AC8C7C3B925 PUSH1 0x1 PUSH1 0x0 CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 DUP8 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SLOAD PUSH1 0x40 MLOAD DUP1 DUP3 DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 PUSH1 0x1 SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x7 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ DUP1 ISZERO PUSH2 0xCE0 JUMPI POP PUSH1 0x0 ISZERO ISZERO PUSH1 0x7 PUSH1 0x14 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH1 0xFF AND ISZERO ISZERO EQ JUMPDEST ISZERO ISZERO PUSH2 0xCEB JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP3 PUSH1 0x3 SWAP1 DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 PUSH2 0xD01 SWAP3 SWAP2 SWAP1 PUSH2 0x14A0 JUMP JUMPDEST POP DUP2 PUSH1 0x4 SWAP1 DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 PUSH2 0xD18 SWAP3 SWAP2 SWAP1 PUSH2 0x14A0 JUMP JUMPDEST POP DUP1 PUSH1 0x6 DUP2 SWAP1 SSTORE POP PUSH2 0xD2C CALLER PUSH1 0x6 SLOAD PUSH2 0x1362 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x7 PUSH1 0x14 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH1 0xFF MUL NOT AND SWAP1 DUP4 ISZERO ISZERO MUL OR SWAP1 SSTORE POP POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SLOAD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x4 DUP1 SLOAD PUSH1 0x1 DUP2 PUSH1 0x1 AND ISZERO PUSH2 0x100 MUL SUB AND PUSH1 0x2 SWAP1 DIV DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP1 SLOAD PUSH1 0x1 DUP2 PUSH1 0x1 AND ISZERO PUSH2 0x100 MUL SUB AND PUSH1 0x2 SWAP1 DIV DUP1 ISZERO PUSH2 0xE2A JUMPI DUP1 PUSH1 0x1F LT PUSH2 0xDFF JUMPI PUSH2 0x100 DUP1 DUP4 SLOAD DIV MUL DUP4 MSTORE SWAP2 PUSH1 0x20 ADD SWAP2 PUSH2 0xE2A JUMP JUMPDEST DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD DUP2 MSTORE SWAP1 PUSH1 0x1 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0xE0D JUMPI DUP3 SWAP1 SUB PUSH1 0x1F AND DUP3 ADD SWAP2 JUMPDEST POP POP POP POP POP DUP2 JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ ISZERO ISZERO ISZERO PUSH2 0xE6F JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0xEFE DUP3 PUSH1 0x1 PUSH1 0x0 CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 DUP7 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SLOAD PUSH2 0x1107 SWAP1 SWAP2 SWAP1 PUSH4 0xFFFFFFFF AND JUMP JUMPDEST PUSH1 0x1 PUSH1 0x0 CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 DUP6 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 DUP2 SWAP1 SSTORE POP DUP3 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0x8C5BE1E5EBEC7D5BD14F71427D1E84F3DD0314C0F7B2291E5B200AC8C7C3B925 PUSH1 0x1 PUSH1 0x0 CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 DUP8 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SLOAD PUSH1 0x40 MLOAD DUP1 DUP3 DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 PUSH1 0x1 SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x1076 CALLER DUP5 DUP5 PUSH2 0x1128 JUMP JUMPDEST PUSH1 0x1 SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x1 PUSH1 0x0 DUP5 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SLOAD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 DUP4 DUP4 GT ISZERO ISZERO ISZERO PUSH2 0x1119 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP3 DUP5 SUB SWAP1 POP DUP1 SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 DUP5 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SLOAD DUP2 GT ISZERO ISZERO ISZERO PUSH2 0x1175 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP3 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ ISZERO ISZERO ISZERO PUSH2 0x11B1 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x1202 DUP2 PUSH1 0x0 DUP1 DUP7 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SLOAD PUSH2 0x1107 SWAP1 SWAP2 SWAP1 PUSH4 0xFFFFFFFF AND JUMP JUMPDEST PUSH1 0x0 DUP1 DUP6 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 DUP2 SWAP1 SSTORE POP PUSH2 0x1295 DUP2 PUSH1 0x0 DUP1 DUP6 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SLOAD PUSH2 0x1341 SWAP1 SWAP2 SWAP1 PUSH4 0xFFFFFFFF AND JUMP JUMPDEST PUSH1 0x0 DUP1 DUP5 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 DUP2 SWAP1 SSTORE POP DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0xDDF252AD1BE2C89B69C2B068FC378DAA952BA7F163C4A11628F55A4DF523B3EF DUP4 PUSH1 0x40 MLOAD DUP1 DUP3 DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 DUP3 DUP5 ADD SWAP1 POP DUP4 DUP2 LT ISZERO ISZERO ISZERO PUSH2 0x1358 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP1 SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP3 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ ISZERO ISZERO ISZERO PUSH2 0x1388 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x139D DUP2 PUSH1 0x2 SLOAD PUSH2 0x1341 SWAP1 SWAP2 SWAP1 PUSH4 0xFFFFFFFF AND JUMP JUMPDEST PUSH1 0x2 DUP2 SWAP1 SSTORE POP PUSH2 0x13F4 DUP2 PUSH1 0x0 DUP1 DUP6 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SLOAD PUSH2 0x1341 SWAP1 SWAP2 SWAP1 PUSH4 0xFFFFFFFF AND JUMP JUMPDEST PUSH1 0x0 DUP1 DUP5 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 DUP2 SWAP1 SSTORE POP DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0xDDF252AD1BE2C89B69C2B068FC378DAA952BA7F163C4A11628F55A4DF523B3EF DUP4 PUSH1 0x40 MLOAD DUP1 DUP3 DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP POP JUMP JUMPDEST DUP3 DUP1 SLOAD PUSH1 0x1 DUP2 PUSH1 0x1 AND ISZERO PUSH2 0x100 MUL SUB AND PUSH1 0x2 SWAP1 DIV SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x1F ADD PUSH1 0x20 SWAP1 DIV DUP2 ADD SWAP3 DUP3 PUSH1 0x1F LT PUSH2 0x14E1 JUMPI DUP1 MLOAD PUSH1 0xFF NOT AND DUP4 DUP1 ADD OR DUP6 SSTORE PUSH2 0x150F JUMP JUMPDEST DUP3 DUP1 ADD PUSH1 0x1 ADD DUP6 SSTORE DUP3 ISZERO PUSH2 0x150F JUMPI SWAP2 DUP3 ADD JUMPDEST DUP3 DUP2 GT ISZERO PUSH2 0x150E JUMPI DUP3 MLOAD DUP3 SSTORE SWAP2 PUSH1 0x20 ADD SWAP2 SWAP1 PUSH1 0x1 ADD SWAP1 PUSH2 0x14F3 JUMP JUMPDEST JUMPDEST POP SWAP1 POP PUSH2 0x151C SWAP2 SWAP1 PUSH2 0x1520 JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST PUSH2 0x1542 SWAP2 SWAP1 JUMPDEST DUP1 DUP3 GT ISZERO PUSH2 0x153E JUMPI PUSH1 0x0 DUP2 PUSH1 0x0 SWAP1 SSTORE POP PUSH1 0x1 ADD PUSH2 0x1526 JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST SWAP1 JUMP STOP LOG1 PUSH6 0x627A7A723058 KECCAK256 0xa9 LOG1 INVALID 0xe4 PUSH26 0xF3935C0F331830D30B6F83ACFEA71C9E1507B079AEF1FCDE98E0 0xc6 STOP 0x29 ",
	"sourceMap": "49:587:1:-;;;154:1;130:25;;;;;;;;;;;;;;;;;;;;249:5;222:32;;;;;;;;;;;;;;;;;;;;259:67;8:9:-1;5:2;;;30:1;27;20:12;5:2;259:67:1;311:10;295:13;;:26;;;;;;;;;;;;;;;;;;49:587;;;;;;"
}';

let bytecode = '{'+
	'"linkReferences": {},'+
	'"object":'+
	'"60806040526001600560006101000a81548160ff021916908360ff16021790555060006007601'+
	'6101000a81548160ff02191690831515021790555034801561004757600080fd5b50336007600'+
	'06101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373fffffffff'+
	'fffffffffffffffffffffffffffffff160217905550611571806100986000396000f3006080604'+
	'052600436106100d0576000357c010000000000000000000000000000000000000000000000000'+
	'0000000900463ffffffff16806302a86781146100d557806306fdde031461012c578063095ea7b'+
	'3146101bc57806318160ddd1461022157806323b872dd1461024c5780632ff2e9dc146102d1578'+
	'063313ce567146102fc578063395093511461032d57806341f50a6d1461039257806370a082311'+
	'461044b57806395d89b41146104a2578063a457c2d714610532578063a9059cbb1461059757806'+
	'3dd62ed3e146105fc575b600080fd5b3480156100e157600080fd5b506100ea610673565b60405'+
	'1808273ffffffffffffffffffffffffffffffffffffffff1673fffffffffffffffffffffffffff'+
	'fffffffffffff16815260200191505060405180910390f35b34801561013857600080fd5b50610'+
	'141610699565b60405180806020018281038252838181518152602001915080519060200190808'+
	'38360005b83811015610181578082015181840152602081019050610166565b505050509050908'+
	'10190601f1680156101ae5780820380516001836020036101000a031916815260200191505b509'+
	'250505060405180910390f35b3480156101c857600080fd5b50610207600480360381019080803'+
	'573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929'+
	'190505050610737565b604051808215151515815260200191505060405180910390f35b3480156'+
	'1022d57600080fd5b50610236610864565b6040518082815260200191505060405180910390f35'+
	'b34801561025857600080fd5b506102b7600480360381019080803573fffffffffffffffffffff'+
	'fffffffffffffffffff169060200190929190803573fffffffffffffffffffffffffffffffffff'+
	'fffff1690602001909291908035906020019092919050505061086e565b6040518082151515158'+
	'15260200191505060405180910390f35b3480156102dd57600080fd5b506102e6610a20565b604'+
	'0518082815260200191505060405180910390f35b34801561030857600080fd5b50610311610a2'+
	'6565b604051808260ff1660ff16815260200191505060405180910390f35b34801561033957600'+
	'080fd5b50610378600480360381019080803573fffffffffffffffffffffffffffffffffffffff'+
	'f16906020019092919080359060200190929190505050610a39565b60405180821515151581526'+
	'0200191505060405180910390f35b34801561039e57600080fd5b5061044960048036038101908'+
	'0803590602001908201803590602001908080601f0160208091040260200160405190810160405'+
	'280939291908181526020018383808284378201915050505050509192919290803590602001908'+
	'201803590602001908080601f01602080910402602001604051908101604052809392919081815'+
	'2602001838380828437820191505050505050919291929080359060200190929190505050610c7'+
	'0565b005b34801561045757600080fd5b5061048c600480360381019080803573fffffffffffff'+
	'fffffffffffffffffffffffffff169060200190929190505050610d4c565b60405180828152602'+
	'00191505060405180910390f35b3480156104ae57600080fd5b506104b7610d94565b604051808'+
	'0602001828103825283818151815260200191508051906020019080838360005b838110156104f'+
	'75780820151818401526020810190506104dc565b50505050905090810190601f1680156105245'+
	'780820380516001836020036101000a031916815260200191505b509250505060405180910390f'+
	'35b34801561053e57600080fd5b5061057d600480360381019080803573fffffffffffffffffff'+
	'fffffffffffffffffffff16906020019092919080359060200190929190505050610e32565b604'+
	'051808215151515815260200191505060405180910390f35b3480156105a357600080fd5b50610'+
	'5e2600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019'+
	'092919080359060200190929190505050611069565b60405180821515151581526020019150506'+
	'0405180910390f35b34801561060857600080fd5b5061065d600480360381019080803573fffff'+
	'fffffffffffffffffffffffffffffffffff169060200190929190803573fffffffffffffffffff'+
	'fffffffffffffffffffff169060200190929190505050611080565b60405180828152602001915'+
	'05060405180910390f35b600760009054906101000a900473fffffffffffffffffffffffffffff'+
	'fffffffffff1681565b60038054600181600116156101000203166002900480601f01602080910'+
	'402602001604051908101604052809291908181526020018280546001816001161561010002031'+
	'660029004801561072f5780601f106107045761010080835404028352916020019161072f565b8'+
	'20191906000526020600020905b81548152906001019060200180831161071257829003601f168'+
	'201915b505050505081565b60008073ffffffffffffffffffffffffffffffffffffffff168373f'+
	'fffffffffffffffffffffffffffffffffffffff161415151561077457600080fd5b81600160003'+
	'373ffffffffffffffffffffffffffffffffffffffff1673fffffffffffffffffffffffffffffff'+
	'fffffffff16815260200190815260200160002060008573fffffffffffffffffffffffffffffff'+
	'fffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016'+
	'00020819055508273ffffffffffffffffffffffffffffffffffffffff163373fffffffffffffff'+
	'fffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5'+
	'b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565'+
	'b6000600254905090565b6000600160008573ffffffffffffffffffffffffffffffffffffffff1'+
	'673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003'+
	'373ffffffffffffffffffffffffffffffffffffffff1673fffffffffffffffffffffffffffffff'+
	'fffffffff1681526020019081526020016000205482111515156108fb57600080fd5b61098a826'+
	'00160008773ffffffffffffffffffffffffffffffffffffffff1673fffffffffffffffffffffff'+
	'fffffffffffffffff16815260200190815260200160002060003373fffffffffffffffffffffff'+
	'fffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815'+
	'26020016000205461110790919063ffffffff16565b600160008673fffffffffffffffffffffff'+
	'fffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815'+
	'260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673fffffffffffff'+
	'fffffffffffffffffffffffffff16815260200190815260200160002081905550610a158484846'+
	'11128565b600190509392505050565b60065481565b600560009054906101000a900460ff16815'+
	'65b60008073ffffffffffffffffffffffffffffffffffffffff168373fffffffffffffffffffff'+
	'fffffffffffffffffff1614151515610a7657600080fd5b610b0582600160003373fffffffffff'+
	'fffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815'+
	'260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673f'+
	'fffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546113419'+
	'0919063ffffffff16565b600160003373ffffffffffffffffffffffffffffffffffffffff1673f'+
	'fffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573f'+
	'fffffffffffffffffffffffffffffffffffffff1673fffffffffffffffffffffffffffffffffff'+
	'fffff168152602001908152602001600020819055508273fffffffffffffffffffffffffffffff'+
	'fffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14'+
	'f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600160003373fffffffffffffffffffff'+
	'fffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908'+
	'15260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673fffffffffff'+
	'fffffffffffffffffffffffffffff1681526020019081526020016000205460405180828152602'+
	'00191505060405180910390a36001905092915050565b600760009054906101000a900473fffff'+
	'fffffffffffffffffffffffffffffffffff1673fffffffffffffffffffffffffffffffffffffff'+
	'f163373ffffffffffffffffffffffffffffffffffffffff16148015610ce057506000151560076'+
	'0149054906101000a900460ff161515145b1515610ceb57600080fd5b826003908051906020019'+
	'0610d019291906114a0565b508160049080519060200190610d189291906114a0565b508060068'+
	'1905550610d2c33600654611362565b6001600760146101000a81548160ff02191690831515021'+
	'7905550505050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673fff'+
	'fffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905091905'+
	'0565b60048054600181600116156101000203166002900480601f0160208091040260200160405'+
	'190810160405280929190818152602001828054600181600116156101000203166002900480156'+
	'10e2a5780601f10610dff57610100808354040283529160200191610e2a565b820191906000526'+
	'020600020905b815481529060010190602001808311610e0d57829003601f168201915b5050505'+
	'05081565b60008073ffffffffffffffffffffffffffffffffffffffff168373fffffffffffffff'+
	'fffffffffffffffffffffffff1614151515610e6f57600080fd5b610efe82600160003373fffff'+
	'fffffffffffffffffffffffffffffffffff1673fffffffffffffffffffffffffffffffffffffff'+
	'f16815260200190815260200160002060008673fffffffffffffffffffffffffffffffffffffff'+
	'f1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546'+
	'1110790919063ffffffff16565b600160003373fffffffffffffffffffffffffffffffffffffff'+
	'f1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600'+
	'08573ffffffffffffffffffffffffffffffffffffffff1673fffffffffffffffffffffffffffff'+
	'fffffffffff168152602001908152602001600020819055508273fffffffffffffffffffffffff'+
	'fffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7'+
	'd5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600160003373fffffffffffffff'+
	'fffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602'+
	'00190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673fffff'+
	'fffffffffffffffffffffffffffffffffff1681526020019081526020016000205460405180828'+
	'15260200191505060405180910390a36001905092915050565b6000611076338484611128565b6'+
	'001905092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff167'+
	'3ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000837'+
	'3ffffffffffffffffffffffffffffffffffffffff1673fffffffffffffffffffffffffffffffff'+
	'fffffff16815260200190815260200160002054905092915050565b60008083831115151561111'+
	'957600080fd5b82840390508091505092915050565b6000808473fffffffffffffffffffffffff'+
	'fffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526'+
	'0200160002054811115151561117557600080fd5b600073fffffffffffffffffffffffffffffff'+
	'fffffffff168273ffffffffffffffffffffffffffffffffffffffff16141515156111b15760008'+
	'0fd5b611202816000808673ffffffffffffffffffffffffffffffffffffffff1673fffffffffff'+
	'fffffffffffffffffffffffffffff1681526020019081526020016000205461110790919063fff'+
	'fffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673fffffffffffff'+
	'fffffffffffffffffffffffffff168152602001908152602001600020819055506112958160008'+
	'08573ffffffffffffffffffffffffffffffffffffffff1673fffffffffffffffffffffffffffff'+
	'fffffffffff1681526020019081526020016000205461134190919063ffffffff16565b6000808'+
	'473ffffffffffffffffffffffffffffffffffffffff1673fffffffffffffffffffffffffffffff'+
	'fffffffff168152602001908152602001600020819055508173fffffffffffffffffffffffffff'+
	'fffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89'+
	'b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051808281526020019150506'+
	'0405180910390a3505050565b600080828401905083811015151561135857600080fd5b8091505'+
	'092915050565b60008273ffffffffffffffffffffffffffffffffffffffff16141515156113885'+
	'7600080fd5b61139d8160025461134190919063ffffffff16565b6002819055506113f48160008'+
	'08573ffffffffffffffffffffffffffffffffffffffff1673fffffffffffffffffffffffffffff'+
	'fffffffffff1681526020019081526020016000205461134190919063ffffffff16565b6000808'+
	'473ffffffffffffffffffffffffffffffffffffffff1673fffffffffffffffffffffffffffffff'+
	'fffffffff168152602001908152602001600020819055508173fffffffffffffffffffffffffff'+
	'fffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c'+
	'89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505'+
	'060405180910390a35050565b82805460018160011615610100020316600290049060005260206'+
	'0002090601f016020900481019282601f106114e157805160ff191683800117855561150f565b8'+
	'280016001018555821561150f579182015b8281111561150e57825182559160200191906001019'+
	'06114f3565b5b50905061151c9190611520565b5090565b61154291905b8082111561153e57600'+
	'0816000905550600101611526565b5090565b905600a165627a7a72305820a9a1fee479f3935c0'+
	'f331830d30b6f83acfea71c9e1507b079aef1fcde98e0c60029",'+
	'"opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x1 PUSH1 0x5 PUSH1 0x0 PUSH2'+
	'0x100 EXP DUP2 SLOAD DUP2 PUSH1 0xFF MUL NOT AND SWAP1 DUP4 PUSH1 0xFF AND MUL'+
	'OR SWAP1 SSTORE POP PUSH1 0x0 PUSH1 0x7 PUSH1 0x14 PUSH2 0x100 EXP DUP2 SLOAD'+
	'DUP2 PUSH1 0xFF MUL NOT AND SWAP1 DUP4 ISZERO ISZERO MUL OR SWAP1 SSTORE POP C'+
	'ALLVALUE DUP1 ISZERO PUSH2 0x47 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP CALLE'+
	'R PUSH1 0x7 PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFF'+
	'FFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFF'+
	'FFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP PUSH2 0x1571 DUP1 PUSH2 0x98'+
	'PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN STOP PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x'+
	'4 CALLDATASIZE LT PUSH2 0xD0 JUMPI PUSH1 0x0 CALLDATALOAD PUSH29 0x10000000000'+
	'0000000000000000000000000000000000000000000000 SWAP1 DIV PUSH4 0xFFFFFFFF AND'+
	'DUP1 PUSH4 0x2A86781 EQ PUSH2 0xD5 JUMPI DUP1 PUSH4 0x6FDDE03 EQ PUSH2 0x12C J'+
	'UMPI DUP1 PUSH4 0x95EA7B3 EQ PUSH2 0x1BC JUMPI DUP1 PUSH4 0x18160DDD EQ PUSH2'+
	'0x221 JUMPI DUP1 PUSH4 0x23B872DD EQ PUSH2 0x24C JUMPI DUP1 PUSH4 0x2FF2E9DC E'+
	'Q PUSH2 0x2D1 JUMPI DUP1 PUSH4 0x313CE567 EQ PUSH2 0x2FC JUMPI DUP1 PUSH4 0x39'+
	'509351 EQ PUSH2 0x32D JUMPI DUP1 PUSH4 0x41F50A6D EQ PUSH2 0x392 JUMPI DUP1 PU'+
	'SH4 0x70A08231 EQ PUSH2 0x44B JUMPI DUP1 PUSH4 0x95D89B41 EQ PUSH2 0x4A2 JUMPI'+
	' DUP1 PUSH4 0xA457C2D7 EQ PUSH2 0x532 JUMPI DUP1 PUSH4 0xA9059CBB EQ PUSH2 0x5'+
	' 97 JUMPI DUP1 PUSH4 0xDD62ED3E EQ PUSH2 0x5FC JUMPI JUMPDEST PUSH1 0x0 DUP1 R'+
	' EVERT JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xE1 JUMPI PUSH1 0x0 DUP1 REVERT J'+
	' UMPDEST POP PUSH2 0xEA PUSH2 0x673 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 P'+
	'"sourceMap": "49:587:1:-;;;154:1;130:25;;;;;;;;;;;;;;;;;;;;249:5;222:32;;;;;;;'+
	';;;;;;;;;;;;;259:67;8:9:-1;5:2;;;30:1;27;20:12;5:2;259:67:1;311:10;295:13;;:26;'+
	';;;;;;;;;;;;;;;;;49:587;;;;;;"'+
'}';
*/
/*
let bytecode = "0x608060405234801561001057600080fd5b506040516105bd3803806105bd8339" +
                 "8101604081815282518183526000805460026000196101006001841615020190" +
                 "91160492840183905293019233927fe826f71647b8486f2bae59832124c70792" +
                 "fba044036720a54ec8dacdd5df4fcb9285919081906020820190606083019086" +
                 "9080156100cd5780601f106100a2576101008083540402835291602001916100" +
                 "cd565b820191906000526020600020905b815481529060010190602001808311" +
                 "6100b057829003601f168201915b505083810382528451815284516020918201" +
                 "9186019080838360005b838110156101015781810151838201526020016100e9" +
                 "565b50505050905090810190601f16801561012e578082038051600183602003" +
                 "6101000a031916815260200191505b5094505050505060405180910390a28051" +
                 "610150906000906020840190610157565b50506101f2565b8280546001816001" +
                 "16156101000203166002900490600052602060002090601f0160209004810192" +
                 "82601f1061019857805160ff19168380011785556101c5565b82800160010185" +
                 "5582156101c5579182015b828111156101c55782518255916020019190600101" +
                 "906101aa565b506101d19291506101d5565b5090565b6101ef91905b80821115" +
                 "6101d157600081556001016101db565b90565b6103bc806102016000396000f3" +
                 "0060806040526004361061004b5763ffffffff7c010000000000000000000000" +
                 "0000000000000000000000000000000000600035041663209652558114610050" +
                 "57806393a09352146100da575b600080fd5b34801561005c57600080fd5b5061" +
                 "0065610135565b60408051602080825283518183015283519192839290830191" +
                 "85019080838360005b8381101561009f57818101518382015260200161008756" +
                 "5b50505050905090810190601f1680156100cc57808203805160018360200361" +
                 "01000a031916815260200191505b509250505060405180910390f35b34801561" +
                 "00e657600080fd5b506040805160206004803580820135601f81018490048402" +
                 "8501840190955284845261013394369492936024939284019190819084018382" +
                 "80828437509497506101cc9650505050505050565b005b600080546040805160" +
                 "20601f6002600019610100600188161502019095169490940493840181900481" +
                 "0282018101909252828152606093909290918301828280156101c15780601f10" +
                 "610196576101008083540402835291602001916101c1565b8201919060005260" +
                 "20600020905b8154815290600101906020018083116101a457829003601f1682" +
                 "01915b505050505090505b90565b604080518181526000805460026000196101" +
                 "00600184161502019091160492820183905233927fe826f71647b8486f2bae59" +
                 "832124c70792fba044036720a54ec8dacdd5df4fcb9285918190602082019060" +
                 "60830190869080156102715780601f1061024657610100808354040283529160" +
                 "200191610271565b820191906000526020600020905b81548152906001019060" +
                 "200180831161025457829003601f168201915b50508381038252845181528451" +
                 "60209182019186019080838360005b838110156102a557818101518382015260" +
                 "200161028d565b50505050905090810190601f1680156102d257808203805160" +
                 "01836020036101000a031916815260200191505b509450505050506040518091" +
                 "0390a280516102f49060009060208401906102f8565b5050565b828054600181" +
                 "600116156101000203166002900490600052602060002090601f016020900481" +
                 "019282601f1061033957805160ff1916838001178555610366565b8280016001" +
                 "0185558215610366579182015b82811115610366578251825591602001919060" +
                 "01019061034b565b50610372929150610376565b5090565b6101c991905b8082" +
                 "1115610372576000815560010161037c5600a165627a7a723058202225a35c50" +
                 "7b31ac6df494f4be31057c7202b5084c592bdb9b29f232407abeac0029";

// Create an instance of a Contract Factory
let factory = new ethers.ContractFactory(abi, bytecode, wallet);

// Notice we pass in "Hello World" as the parameter to the constructor
//let contract = await factory.deploy();
let contract = await factory.deploy("Hello World");

// The address the Contract WILL have once mined
// See: https://ropsten.etherscan.io/address/0x2bd9aaa2953f988153c8629926d22a6a5f69b14e
console.log(contract.address);
// "0x2bD9aAa2953F988153c8629926D22A6a5F69b14E"

// The transaction that was sent to the network to deploy the Contract
// See: https://ropsten.etherscan.io/tx/0x159b76843662a15bd67e482dcfbee55e8e44efad26c5a614245e12a00d4b1a51
console.log(contract.deployTransaction.hash);
// "0x159b76843662a15bd67e482dcfbee55e8e44efad26c5a614245e12a00d4b1a51"

// The contract is NOT deployed yet; we must wait until it is mined
await contract.deployed();
*/
/*
//Initialize Token
var tokenName = "Poofs";
var tokenNumber = 2000000;
var tokenSymbol = "PFFS";

var sendPromise = contract.initializeCoin(tokenName, tokenSymbol, tokenNumber);

sendPromise.then(function(transaction){
  console.log(transaction);
});
*/
/*
var callPromise = contract.getValue();

callPromise.then(function(result){
  console.log(result);
	alert(result);
});
*/
