#!/bin/bash
function cloneAndCheckout {
	if [ -d "$1" ]; then
		cd $1
		git pull origin master
	else
		git clone https://github.com/skypet/$1
		cd $1
	fi
	git checkout $2
	cd ..
}
function versionAndPush {
    cd $1
    git add .
    git commit -m "new contract"
    npm version major
    npm publish
    git push origin master
    cd ..
}
cloneAndCheckout "SkyPetSmartContractWrapper"
cp -f build/contracts/SkyPet.json SkyPetSmartContractWrapper
versionAndPush "SkyPetSmartContractWrapper"
rm -rf SkyPetSmartContractWrapper
