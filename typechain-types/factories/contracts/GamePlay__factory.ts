/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { GamePlay, GamePlayInterface } from "../../contracts/GamePlay";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
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
        internalType: "uint256",
        name: "betNumber",
        type: "uint256",
      },
    ],
    name: "SMdataBetNumber",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "winer",
        type: "address",
      },
    ],
    name: "SMdataWin",
    type: "event",
  },
  {
    inputs: [],
    name: "amount",
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
        name: "_amountTokenGuess",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_guess",
        type: "uint256",
      },
    ],
    name: "bet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
    name: "play",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "playerBet",
    outputs: [
      {
        internalType: "uint256",
        name: "amountTokenGuess",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "guess",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "stakerAddressList",
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
    name: "tokenXU",
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
] as const;

const _bytecode =
  "0x608060405268056bc75e2d631000006003553480156200001e57600080fd5b50604051620010e9380380620010e9833981810160405281019062000044919062000136565b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505062000168565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620000fe82620000d1565b9050919050565b6200011081620000f1565b81146200011c57600080fd5b50565b600081519050620001308162000105565b92915050565b6000602082840312156200014f576200014e620000cc565b5b60006200015f848285016200011f565b91505092915050565b610f7180620001786000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c806378dd33c11161005b57806378dd33c1146100ed5780638da5cb5b1461011d57806393e84cd91461013b578063aa8c217c146101455761007d565b80634251ea3c1461008257806355c1ec11146100b35780636ffcc719146100d1575b600080fd5b61009c6004803603810190610097919061098a565b610163565b6040516100aa9291906109d0565b60405180910390f35b6100bb610187565b6040516100c89190610a58565b60405180910390f35b6100eb60048036038101906100e69190610a9f565b6101ad565b005b61010760048036038101906101029190610adf565b6104e0565b6040516101149190610b1b565b60405180910390f35b61012561051f565b6040516101329190610b57565b60405180910390f35b610143610543565b005b61014d6108e3565b60405161015a9190610b72565b60405180910390f35b60046020528060005260406000206000915090508060000154908060010154905082565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b81600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e33306040518363ffffffff1660e01b815260040161020b929190610b8d565b602060405180830381865afa158015610228573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061024c9190610bcb565b101561028d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161028490610c55565b60405180910390fd5b81600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b81526004016102e99190610b1b565b602060405180830381865afa158015610306573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061032a9190610bcb565b101561036b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161036290610cc1565b60405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b81526004016103ca93929190610ce1565b6020604051808303816000875af11580156103e9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061040d9190610d50565b50604051806040016040528083815260200182815250600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000155602082015181600101559050506002339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b600281815481106104f057600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006002424460405160200161055a929190610d9e565b6040516020818303038152906040528051906020012060001c61057d9190610df9565b90507fea5f571072889c56199abb75ded6c813a18496e6140bd1ce4e1d27f4b8ac67ef816040516105ae9190610b72565b60405180910390a160005b6002805490508110156108d1578160046000600284815481106105df576105de610e2a565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101540361082e57600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb6002838154811061069f5761069e610e2a565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600260046000600287815481106106e4576106e3610e2a565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001546107579190610e88565b6040518363ffffffff1660e01b8152600401610774929190610eca565b6020604051808303816000875af1158015610793573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107b79190610d50565b507fffb311a7e9339e49959f3f2197b1089faa3f4ebd466f2f07f810a2fa5d54f83a600282815481106107ed576107ec610e2a565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040516108259190610b1b565b60405180910390a15b600460006002838154811061084657610845610e2a565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000808201600090556001820160009055505080806108c990610ef3565b9150506105b9565b50600260006108e091906108e9565b50565b60035481565b5080546000825590600052602060002090810190610907919061090a565b50565b5b8082111561092357600081600090555060010161090b565b5090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006109578261092c565b9050919050565b6109678161094c565b811461097257600080fd5b50565b6000813590506109848161095e565b92915050565b6000602082840312156109a05761099f610927565b5b60006109ae84828501610975565b91505092915050565b6000819050919050565b6109ca816109b7565b82525050565b60006040820190506109e560008301856109c1565b6109f260208301846109c1565b9392505050565b6000819050919050565b6000610a1e610a19610a148461092c565b6109f9565b61092c565b9050919050565b6000610a3082610a03565b9050919050565b6000610a4282610a25565b9050919050565b610a5281610a37565b82525050565b6000602082019050610a6d6000830184610a49565b92915050565b610a7c816109b7565b8114610a8757600080fd5b50565b600081359050610a9981610a73565b92915050565b60008060408385031215610ab657610ab5610927565b5b6000610ac485828601610a8a565b9250506020610ad585828601610a8a565b9150509250929050565b600060208284031215610af557610af4610927565b5b6000610b0384828501610a8a565b91505092915050565b610b158161094c565b82525050565b6000602082019050610b306000830184610b0c565b92915050565b6000610b418261092c565b9050919050565b610b5181610b36565b82525050565b6000602082019050610b6c6000830184610b48565b92915050565b6000602082019050610b8760008301846109c1565b92915050565b6000604082019050610ba26000830185610b0c565b610baf6020830184610b0c565b9392505050565b600081519050610bc581610a73565b92915050565b600060208284031215610be157610be0610927565b5b6000610bef84828501610bb6565b91505092915050565b600082825260208201905092915050565b7f506c6561736520617070726f766520746f6b656e000000000000000000000000600082015250565b6000610c3f601483610bf8565b9150610c4a82610c09565b602082019050919050565b60006020820190508181036000830152610c6e81610c32565b9050919050565b7f536f72727920796f7520646f6e74206861766520656f7567687420746f6b656e600082015250565b6000610cab602083610bf8565b9150610cb682610c75565b602082019050919050565b60006020820190508181036000830152610cda81610c9e565b9050919050565b6000606082019050610cf66000830186610b0c565b610d036020830185610b0c565b610d1060408301846109c1565b949350505050565b60008115159050919050565b610d2d81610d18565b8114610d3857600080fd5b50565b600081519050610d4a81610d24565b92915050565b600060208284031215610d6657610d65610927565b5b6000610d7484828501610d3b565b91505092915050565b6000819050919050565b610d98610d93826109b7565b610d7d565b82525050565b6000610daa8285610d87565b602082019150610dba8284610d87565b6020820191508190509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000610e04826109b7565b9150610e0f836109b7565b925082610e1f57610e1e610dca565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610e93826109b7565b9150610e9e836109b7565b9250828202610eac816109b7565b91508282048414831517610ec357610ec2610e59565b5b5092915050565b6000604082019050610edf6000830185610b0c565b610eec60208301846109c1565b9392505050565b6000610efe826109b7565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610f3057610f2f610e59565b5b60018201905091905056fea2646970667358221220170ecd8b59bbd84456e6b55283dd78ef485d0dd2ad3d74bf2302734edfd04b4764736f6c63430008120033";

type GamePlayConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GamePlayConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GamePlay__factory extends ContractFactory {
  constructor(...args: GamePlayConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<GamePlay> {
    return super.deploy(_token, overrides || {}) as Promise<GamePlay>;
  }
  override getDeployTransaction(
    _token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_token, overrides || {});
  }
  override attach(address: string): GamePlay {
    return super.attach(address) as GamePlay;
  }
  override connect(signer: Signer): GamePlay__factory {
    return super.connect(signer) as GamePlay__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GamePlayInterface {
    return new utils.Interface(_abi) as GamePlayInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GamePlay {
    return new Contract(address, _abi, signerOrProvider) as GamePlay;
  }
}