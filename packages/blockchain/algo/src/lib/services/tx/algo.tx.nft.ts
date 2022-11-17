// No types for base32.js
// @ts-ignore
import base32 from 'base32.js'
import { isWithSignatureId } from '@tatumio/shared-abstract-sdk'
import * as algosdk from 'algosdk'
import { BigNumber } from 'bignumber.js'
import type {
  BurnNftAlgo,
  BurnNftAlgoKMS,
  MintNftAlgo,
  MintNftAlgoKMS,
  TransferNftAlgo,
  TransferNftAlgoExpress,
  TransferNftAlgoKMS,
} from '../algo.types'
import { AlgoWeb } from '../algo.web'
import { algoWallet } from '../algo.wallet'

export const prepareCreateNFTSignedTransaction = async ({
  body,
  testnet = false,
  algoWeb,
  provider,
}: {
  body: MintNftAlgo | MintNftAlgoKMS
  testnet?: boolean
  algoWeb: AlgoWeb
  provider?: string
}) => {
  const algodClient = algoWeb.getClient(testnet, provider)
  const params = await algodClient.getTransactionParams().do()

  const decoder = new base32.Decoder({ type: 'rfc4648' })

  const from = isWithSignatureId(body)
    ? body.from
    : algoWallet().generateAddressFromPrivatetKey(body.fromPrivateKey)

  const txn = algosdk.makeAssetCreateTxnWithSuggestedParams(
    from,
    undefined,
    1,
    0,
    false,
    from,
    body.attr?.reserve,
    body.attr?.freeze,
    body.attr?.clawback,
    body.attr?.assetUnit,
    body.name,
    body.url,
    undefined,
    {
      ...params,
      fee: Number(body.fee || '0.001') * 1000000,
      flatFee: true,
    },
  )

  if (isWithSignatureId(body)) {
    return JSON.stringify(txn)
  }

  const secretKey = new Uint8Array(decoder.write(body.fromPrivateKey).buf)
  const signedTxn = txn.signTxn(secretKey)

  return Buffer.from(signedTxn).toString('hex')
}

export const prepareTransferNFTSignedTransaction = async ({
  body,
  testnet = false,
  algoWeb,
  provider,
}: {
  body: TransferNftAlgo | TransferNftAlgoKMS | TransferNftAlgoExpress
  testnet?: boolean
  algoWeb: AlgoWeb
  provider?: string
}) => {
  const algodClient = algoWeb.getClient(testnet, provider)
  const params = await algodClient.getTransactionParams().do()

  const decoder = new base32.Decoder({ type: 'rfc4648' })

  const from = isWithSignatureId(body as TransferNftAlgoKMS)
    ? (body as TransferNftAlgoKMS).from
    : algoWallet().generateAddressFromPrivatetKey((body as TransferNftAlgo).fromPrivateKey)

  if (!body.value) {
    throw new Error('No value specified')
  }

  const txn = algosdk.makeAssetTransferTxnWithSuggestedParams(
    from,
    body.to,
    undefined,
    undefined,
    Number.parseInt((body as TransferNftAlgo).value || '1'),
    undefined,
    new BigNumber(body.contractAddress).toNumber(),
    {
      ...params,
      fee: Number(body.fee || '0.001') * 1000000,
      flatFee: true,
    },
    undefined,
  )

  if (isWithSignatureId(body as TransferNftAlgoKMS)) {
    return JSON.stringify(txn)
  }

  const secretKey = new Uint8Array(decoder.write((body as TransferNftAlgo).fromPrivateKey).buf)
  const signedTxn = txn.signTxn(secretKey)

  return Buffer.from(signedTxn).toString('hex')
}

export const prepareBurnNFTSignedTransaction = async ({
  body,
  testnet = false,
  algoWeb,
  provider,
}: {
  body: BurnNftAlgo | BurnNftAlgoKMS
  testnet?: boolean
  algoWeb: AlgoWeb
  provider?: string
}) => {
  const algodClient = algoWeb.getClient(testnet, provider)
  const params = await algodClient.getTransactionParams().do()

  const decoder = new base32.Decoder({ type: 'rfc4648' })

  const txn = algosdk.makeAssetDestroyTxnWithSuggestedParams(
    isWithSignatureId(body as BurnNftAlgoKMS)
      ? (body as BurnNftAlgoKMS).from
      : algoWallet().generateAddressFromPrivatetKey((body as BurnNftAlgo).fromPrivateKey),
    undefined,
    Number(body.contractAddress),
    {
      ...params,
      fee: Number(body.fee || '0.001') * 1000000,
      flatFee: true,
    },
    undefined,
  )

  if (isWithSignatureId(body as BurnNftAlgoKMS)) {
    return JSON.stringify(txn)
  }

  const secretKey = new Uint8Array(decoder.write((body as BurnNftAlgo).fromPrivateKey).buf)
  const signedTxn = txn.signTxn(secretKey)

  return Buffer.from(signedTxn).toString('hex')
}