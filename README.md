# AI-PFP

### Setup

1. npm install -g truffle
2. truffle init
3. npm install @truffle/hdwallet-provider
4. npm install @openzeppelin/contracts

### NFT(ERC721) Contact 만들기

1. `/contacts/AINFT.sol` 파일을 다른 이름으로 변경
2. 이름 변경한 파일에서 `AINFT` 또는 `AiNFT` 이름으로 된 부분은 만들고 싶은 NFT 이름으로 변경
3. `/migrations/1_initial_migration.js` 파일에 있는 `AINFT`를 다른 이름으로 변경

### mnemonic과 infura.io endpoint 설정

- mnemonic은 유출되지 않게 조심하세요. 유출되면 망합니다ㅠㅠ. (테스트용 새로운 Wallet 만들어서 해보시는 걸 추천)
- [다음 링크 내용](https://velog.io/@-__-/sol6#rinkeby-%ED%85%8C%EC%8A%A4%ED%8A%B8%EB%84%B7%EC%97%90-erc-721-%ED%86%A0%ED%81%B0-%EB%A7%8C%EB%93%A4%EA%B3%A0-%EB%B0%B0%ED%8F%AC%ED%95%98%EA%B8%B0)을 참고해주세요
- `.mnemonic` 파일을 생성 후, mnemonic 내용 붙여넣어주세요
- `.infura` 파일을 생성 후, rinkeby용 endpoint를 설정해주세요. (endpoint는 https://rinkeby.infura.io/v3/ 로 시작합니다)

### Deploy

`$ truffle migrate --compile-all --network rinkeby`

### Minting

#### truffle console 실행하기

- `$ truffle console --network rinkeby`

#### 실행된 truffle console 환경에서 아래 명령 실행하기

(`AINFT` 이름은 위에 수정하신 걸로 바꿔주세요)

- truffle(rinkeby)> `instance = await AINFT.deployed()`
- truffle(rinkeby)> `instance.name()`
- truffle(rinkeby)> `instance.symbol()`

#### Minting NFT

1. https://www.pinata.cloud/ 를 이용해 NFT에 사용 할 이미지를 업로드 합니다. [자세한 내용](https://velog.io/@-__-/sol6#truffle%EC%97%90%EC%84%9C-nft-%EB%B0%9C%ED%96%89%ED%95%98%EA%B8%B0)
2. 업로드 한 ipfs 이미지를 json 파일로 다시 한번 감싸서, 다시 ipfs에 배포합니다. (`pinata-test.json` 파일 참고 해주세요)
3. truffle(rinkeby)> `instance.mintNFT("ipfs://IFPS-FILE-CID", { from: accounts[0] })`

ex. `instance.mintNFT("ipfs://QmNkVh9enxgJAP3YLbTUioknoDUSEwKXh9G3UkDrpyHoVi", { from: accounts[0] })`

### OpenSea (Testnet)에서 확인해보기

- https://testnets.opensea.io/
- Metamask로 로그인

### Reference

- https://velog.io/@-__-/sol6
