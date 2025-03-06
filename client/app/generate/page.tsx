'use client';

import { useState } from 'react';
// import { ECPairInterface, ECPairFactory } from 'bitcoinjs-lib';
// import * as ecc from 'tiny-secp256k1';
import { payments } from 'bitcoinjs-lib';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';

interface KeyPair {
  address: string;
  privateKey: string;
}

export default function Generate() {
  const [keyPair, setKeyPair] = useState<KeyPair | null>(null);

  // const ECPair = ECPairFactory(ecc);

  const generateKeyPair = () => {
    // const keyPair: ECPairInterface = ECPair.makeRandom();
    // const { address } = payments.p2pkh({ pubkey: keyPair.publicKey });
    // if (!address) throw new Error('Failed to generate address');
    // setKeyPair({
    //   address,
    //   // privateKey: keyPair.toWIF(),
    // });
  };

  return (
    <div className="flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-2xl">Generate Bitcoin Keys</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>Create your Bitcoin address and private key below.</p>
          <Button onClick={generateKeyPair}>Generate Keys</Button>
          {keyPair && (
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold">Bitcoin Address:</h3>
                <p className="break-all text-sm">{keyPair.address}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Private Key:</h3>
                <p className="break-all text-sm">{keyPair.privateKey}</p>
              </div>
              <p className="text-red-500 text-sm">
                Save these securely! Losing them means losing your Bitcoin.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}