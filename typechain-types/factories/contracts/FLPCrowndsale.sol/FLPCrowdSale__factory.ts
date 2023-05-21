/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  FLPCrowdSale,
  FLPCrowdSaleInterface,
} from "../../../contracts/FLPCrowndsale.sol/FLPCrowdSale";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "bnb_rate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "usdt_rate",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "wallet",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "icotoken",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "BuyTokenByBNB",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "DrawBNB",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newRate",
        type: "uint256",
      },
    ],
    name: "SetBNBRate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newRate",
        type: "uint256",
      },
    ],
    name: "SetUSDTRate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IERC20",
        name: "tokenAddress",
        type: "address",
      },
    ],
    name: "SetUSDTToken",
    type: "event",
  },
  {
    inputs: [],
    name: "BNB_rate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "USDT_rate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "_wallet",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "buyTokenByBNB",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "USDTAmount",
        type: "uint256",
      },
    ],
    name: "drawBNB",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "BNBAmount",
        type: "uint256",
      },
    ],
    name: "getTokenAmountBNB",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "USDTAmount",
        type: "uint256",
      },
    ],
    name: "getTokenAmountUSDT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "new_rate",
        type: "uint256",
      },
    ],
    name: "setBNBRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "new_rate",
        type: "uint256",
      },
    ],
    name: "setUSDTRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token_address",
        type: "address",
      },
    ],
    name: "setUSDTToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "usdtToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawErc20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001cc238038062001cc28339818101604052810190620000379190620002bb565b620000576200004b620000f160201b60201c565b620000f960201b60201c565b836002819055508260038190555081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050506200032d565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080fd5b6000819050919050565b620001d781620001c2565b8114620001e357600080fd5b50565b600081519050620001f781620001cc565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200022a82620001fd565b9050919050565b6200023c816200021d565b81146200024857600080fd5b50565b6000815190506200025c8162000231565b92915050565b60006200026f82620001fd565b9050919050565b6000620002838262000262565b9050919050565b620002958162000276565b8114620002a157600080fd5b50565b600081519050620002b5816200028a565b92915050565b60008060008060808587031215620002d857620002d7620001bd565b5b6000620002e887828801620001e6565b9450506020620002fb87828801620001e6565b93505060406200030e878288016200024b565b92505060606200032187828801620002a4565b91505092959194509250565b611985806200033d6000396000f3fe6080604052600436106100fe5760003560e01c8063610757e411610095578063a98ad46c11610064578063a98ad46c146102b6578063acb03d43146102e1578063c1da657e1461031e578063f2fde38b14610347578063fc0c546a14610370576100fe565b8063610757e41461022057806366e226bd1461024b578063715018a6146102745780638da5cb5b1461028b576100fe565b806331927737116100d157806331927737146101bd5780633ccfd60b146101c75780633e3f2359146101de578063592a00e4146101f5576100fe565b8063157fc821146101035780631832d8b61461012e5780631b4622d61461016b5780632be8629914610194575b600080fd5b34801561010f57600080fd5b5061011861039b565b60405161012591906110b2565b60405180910390f35b34801561013a57600080fd5b50610155600480360381019061015091906110fe565b6103a1565b60405161016291906110b2565b60405180910390f35b34801561017757600080fd5b50610192600480360381019061018d91906110fe565b6103b8565b005b3480156101a057600080fd5b506101bb60048036038101906101b691906110fe565b610401565b005b6101c561044a565b005b3480156101d357600080fd5b506101dc6106aa565b005b3480156101ea57600080fd5b506101f36106fb565b005b34801561020157600080fd5b5061020a610841565b60405161021791906110b2565b60405180910390f35b34801561022c57600080fd5b50610235610847565b604051610242919061116c565b60405180910390f35b34801561025757600080fd5b50610272600480360381019061026d91906111d7565b61086d565b005b34801561028057600080fd5b506102896108f0565b005b34801561029757600080fd5b506102a0610904565b6040516102ad9190611213565b60405180910390f35b3480156102c257600080fd5b506102cb61092d565b6040516102d8919061128d565b60405180910390f35b3480156102ed57600080fd5b50610308600480360381019061030391906110fe565b610953565b60405161031591906110b2565b60405180910390f35b34801561032a57600080fd5b50610345600480360381019061034091906110fe565b61096a565b005b34801561035357600080fd5b5061036e600480360381019061036991906112d4565b610b03565b005b34801561037c57600080fd5b50610385610b86565b604051610392919061128d565b60405180910390f35b60025481565b6000600354826103b1919061135f565b9050919050565b6103c0610bac565b806003819055507fbdaa37e3f6679857d8c3e80d172bd45af732a8658cf1d690c81ca96f5a443b5b816040516103f691906110b2565b60405180910390a150565b610409610bac565b806002819055507fb0cc740bbbfcd5af22ee3956c6b44d2d6f499e2a86cb11d915fcce88dca2113a8160405161043f91906110b2565b60405180910390a150565b6000349050600061045a82610953565b90506000811161049f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610496906113ed565b60405180910390fd5b80600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016104fb9190611213565b602060405180830381865afa158015610518573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061053c9190611422565b101561057d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105749061149b565b60405180910390fd5b813373ffffffffffffffffffffffffffffffffffffffff163110156105d7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105ce9061149b565b60405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f1935050505015801561063f573d6000803e3d6000fd5b5061066d600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff163383610c2a565b7ff695091b71a5c3ea41510251da89a66470bbcf1ee118f820a1bab8739e29ea50338260405161069e9291906114bb565b60405180910390a15050565b6106b2610bac565b3373ffffffffffffffffffffffffffffffffffffffff166108fc479081150290604051600060405180830381858888f193505050501580156106f8573d6000803e3d6000fd5b50565b610703610bac565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161079d9190611213565b602060405180830381865afa1580156107ba573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107de9190611422565b6040518363ffffffff1660e01b81526004016107fb9291906114bb565b6020604051808303816000875af115801561081a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061083e919061151c565b50565b60035481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610875610bac565b80600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f43036333e58a6f9255617b54ec9f5825590c8ee695a222dc35e5001927f07151816040516108e5919061128d565b60405180910390a150565b6108f8610bac565b6109026000610cb0565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600254826109639190611549565b9050919050565b6000610975826103a1565b9050600081116109ba576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109b1906113ed565b60405180910390fd5b81600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b8152600401610a169190611213565b602060405180830381865afa158015610a33573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a579190611422565b1015610a98576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a8f9061149b565b60405180910390fd5b610ac6600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16333085610d74565b7f94d5d06cdaa5dd36b4859778a3f0115e552d002c35fae4e9cacb19a19ac6b7dc3382604051610af79291906114bb565b60405180910390a15050565b610b0b610bac565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610b7a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b71906115fd565b60405180910390fd5b610b8381610cb0565b50565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610bb4610dfd565b73ffffffffffffffffffffffffffffffffffffffff16610bd2610904565b73ffffffffffffffffffffffffffffffffffffffff1614610c28576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c1f90611669565b60405180910390fd5b565b610cab8363a9059cbb60e01b8484604051602401610c499291906114bb565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610e05565b505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b610df7846323b872dd60e01b858585604051602401610d9593929190611689565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610e05565b50505050565b600033905090565b6000610e67826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16610ecc9092919063ffffffff16565b9050600081511115610ec75780806020019051810190610e87919061151c565b610ec6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ebd90611732565b60405180910390fd5b5b505050565b6060610edb8484600085610ee4565b90509392505050565b606082471015610f29576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f20906117c4565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051610f529190611855565b60006040518083038185875af1925050503d8060008114610f8f576040519150601f19603f3d011682016040523d82523d6000602084013e610f94565b606091505b5091509150610fa587838387610fb1565b92505050949350505050565b6060831561101357600083510361100b57610fcb85611026565b61100a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611001906118b8565b60405180910390fd5b5b82905061101e565b61101d8383611049565b5b949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60008251111561105c5781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611090919061192d565b60405180910390fd5b6000819050919050565b6110ac81611099565b82525050565b60006020820190506110c760008301846110a3565b92915050565b600080fd5b6110db81611099565b81146110e657600080fd5b50565b6000813590506110f8816110d2565b92915050565b600060208284031215611114576111136110cd565b5b6000611122848285016110e9565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006111568261112b565b9050919050565b6111668161114b565b82525050565b6000602082019050611181600083018461115d565b92915050565b60006111928261112b565b9050919050565b60006111a482611187565b9050919050565b6111b481611199565b81146111bf57600080fd5b50565b6000813590506111d1816111ab565b92915050565b6000602082840312156111ed576111ec6110cd565b5b60006111fb848285016111c2565b91505092915050565b61120d81611187565b82525050565b60006020820190506112286000830184611204565b92915050565b6000819050919050565b600061125361124e6112498461112b565b61122e565b61112b565b9050919050565b600061126582611238565b9050919050565b60006112778261125a565b9050919050565b6112878161126c565b82525050565b60006020820190506112a2600083018461127e565b92915050565b6112b181611187565b81146112bc57600080fd5b50565b6000813590506112ce816112a8565b92915050565b6000602082840312156112ea576112e96110cd565b5b60006112f8848285016112bf565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061136a82611099565b915061137583611099565b92508261138557611384611301565b5b828204905092915050565b600082825260208201905092915050565b7f416d6f756e74206973207a65726f000000000000000000000000000000000000600082015250565b60006113d7600e83611390565b91506113e2826113a1565b602082019050919050565b60006020820190508181036000830152611406816113ca565b9050919050565b60008151905061141c816110d2565b92915050565b600060208284031215611438576114376110cd565b5b60006114468482850161140d565b91505092915050565b7f496e73756666696369656e74206163636f756e742062616c616e636500000000600082015250565b6000611485601c83611390565b91506114908261144f565b602082019050919050565b600060208201905081810360008301526114b481611478565b9050919050565b60006040820190506114d06000830185611204565b6114dd60208301846110a3565b9392505050565b60008115159050919050565b6114f9816114e4565b811461150457600080fd5b50565b600081519050611516816114f0565b92915050565b600060208284031215611532576115316110cd565b5b600061154084828501611507565b91505092915050565b600061155482611099565b915061155f83611099565b925082820261156d81611099565b9150828204841483151761158457611583611330565b5b5092915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006115e7602683611390565b91506115f28261158b565b604082019050919050565b60006020820190508181036000830152611616816115da565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000611653602083611390565b915061165e8261161d565b602082019050919050565b6000602082019050818103600083015261168281611646565b9050919050565b600060608201905061169e6000830186611204565b6116ab6020830185611204565b6116b860408301846110a3565b949350505050565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b600061171c602a83611390565b9150611727826116c0565b604082019050919050565b6000602082019050818103600083015261174b8161170f565b9050919050565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b60006117ae602683611390565b91506117b982611752565b604082019050919050565b600060208201905081810360008301526117dd816117a1565b9050919050565b600081519050919050565b600081905092915050565b60005b838110156118185780820151818401526020810190506117fd565b60008484015250505050565b600061182f826117e4565b61183981856117ef565b93506118498185602086016117fa565b80840191505092915050565b60006118618284611824565b915081905092915050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b60006118a2601d83611390565b91506118ad8261186c565b602082019050919050565b600060208201905081810360008301526118d181611895565b9050919050565b600081519050919050565b6000601f19601f8301169050919050565b60006118ff826118d8565b6119098185611390565b93506119198185602086016117fa565b611922816118e3565b840191505092915050565b6000602082019050818103600083015261194781846118f4565b90509291505056fea2646970667358221220f01d728f5ff424cce4c253e9c1aed1cf1bcbded91a0333e4325a4849fb6cad8664736f6c63430008120033";

type FLPCrowdSaleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FLPCrowdSaleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FLPCrowdSale__factory extends ContractFactory {
  constructor(...args: FLPCrowdSaleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    bnb_rate: PromiseOrValue<BigNumberish>,
    usdt_rate: PromiseOrValue<BigNumberish>,
    wallet: PromiseOrValue<string>,
    icotoken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<FLPCrowdSale> {
    return super.deploy(
      bnb_rate,
      usdt_rate,
      wallet,
      icotoken,
      overrides || {}
    ) as Promise<FLPCrowdSale>;
  }
  override getDeployTransaction(
    bnb_rate: PromiseOrValue<BigNumberish>,
    usdt_rate: PromiseOrValue<BigNumberish>,
    wallet: PromiseOrValue<string>,
    icotoken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      bnb_rate,
      usdt_rate,
      wallet,
      icotoken,
      overrides || {}
    );
  }
  override attach(address: string): FLPCrowdSale {
    return super.attach(address) as FLPCrowdSale;
  }
  override connect(signer: Signer): FLPCrowdSale__factory {
    return super.connect(signer) as FLPCrowdSale__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FLPCrowdSaleInterface {
    return new utils.Interface(_abi) as FLPCrowdSaleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FLPCrowdSale {
    return new Contract(address, _abi, signerOrProvider) as FLPCrowdSale;
  }
}