const query = `
query AllGeinsProducts($skip: Int = 0, $take: Int = 200) {
	products(skip: $skip, take: $take, filter: { sort: ALPHABETICAL }) {
		count
		products {
			productId
      articleNumber
      categoryId
      canonicalUrl
      type
      skus {
        skuId
        weight
        productId
        articleNumber
        externalId
        gtin
        stock {
          totalStock
          inStock
          oversellable
          static
        }
        dimensions {
          length
          width
          height
        }
        shelf
        incoming
      }
      brand {
        brandId
      }
      categories {
        categoryId
        name
        alias
        description
      }
      unitPrice {
        currency {
          name
          symbol
          code
          rate
        }
        vatFormatted
        sellingPriceIncVat
      }
      productImages {
        fileName
        tags
      }
      parameterGroups {
        parameterGroupId
        parameters {
          parameterValueId
          facetId
          identifier
          facetId
          parameterValueId
          type
          name
          value
        }
      }
    }
	}
}`;

const apiKey = '2FBA7E74-B3F3-45FA-9550-A75830260FBF';
async function request(query, variables) {
	const headers = {
		'X-ApiKey': apiKey,
		'Content-Type': 'application/json',
		'Accept': 'application/json',
	};

	const body = JSON.stringify({
		query,
		variables,
	});

	const response = await fetch(`https://merchantapi.geins.io/graphql`, {
		method: 'POST',
		headers,
		body,
	});

	//console.log(variables);
	if (!response.ok) throw new Error(response.statusText);

	const responseBody = await response.json();
	return responseBody.data;
}

async function getProducts() {
	const all = [];

	let skip = 0;
	let take = 200;

	let res = await request(query, { skip, take });
	let count = res?.products?.count ?? 0;

	while (count > skip) {
		const items = res.products?.products ?? [];
		all.push(...items);
		skip = all.length;
		take = Math.min(count - skip, take);

		if (skip >= count) break;

		res = await request(query, { skip, take });
	}
	const accessories = all.filter((p) => p?.categories?.find((c) => c?.alias === 'accessory'));
	const lightsources = all.filter((p) => p?.categories?.find((c) => c?.alias === 'lightsource'));
	const products = all.filter(
		(p) => !p?.categories?.find((c) => ['lightsource', 'accessory'].includes(c?.alias ?? '')),
	);

	console.log('Count:', count);
	console.log('All:', all.length);
	console.log('First', all?.[0]?.productId);
	console.log('Products:', products.length);
	console.log('Accessories:', accessories.length);
	console.log('Lightsources:', lightsources.length);
	//console.log(JSON.stringify(all, null, 2));
}

getProducts();
