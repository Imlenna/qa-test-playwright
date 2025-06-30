import { test, expect, request, devices } from "@playwright/test";

const url = "https://qualeagiria.com.br/";

test.describe("Faz a busca de palavra", () => {
  test.beforeAll(({}, testInfo) => {
    const projetosMobile = ["Mobile Safari", "Mobile Chrome"];
    test.skip(
      projetosMobile.includes(testInfo.project.name),
      `Este grupo de testes é ignorado em projetos mobile: ${testInfo.project.name}`
    );
  });
  test("Status de acesso do site", async () => {
    const context = await request.newContext();
    const response = await context.get(url);
    expect(response.status()).toBe(200);
  });

  test("Acessa o site", async ({ page }) => {
    await page.goto(url);
    await page.getByText("Login A B C D E F G H I J K L").isVisible();
    await page
      .getByRole("textbox", { name: "Encontre uma gíria..." })
      .isVisible();
    await page
      .getByRole("navigation")
      .filter({ hasText: "Inserir Gíria Home Login" })
      .locator("div")
      .isVisible();
    await page.getByText("Pódio da Comunidade Confira").nth(1).isVisible();
    await page
      .locator("section")
      .filter({ hasText: "Dicionário de Gírias Pesquise" })
      .isVisible();
    await page.getByText("Gírias que estão na boca do povo:").isVisible();
    await page.getByRole("heading", { name: "Gíria do dia:" }).isVisible();
  });

  test("Busca palavra", async ({ page }) => {
    await page.goto(url);
    await page
      .getByRole("textbox", { name: "Encontre uma gíria..." })
      .isVisible();
    await page
      .getByRole("textbox", { name: "Encontre uma gíria..." })
      .fill("massa");
    await page.goto("https://qualeagiria.com.br/giria/massa");
    await page
      .getByRole("heading", { name: "Significado de: massa" })
      .isVisible();
    await page
      .getByRole("heading", { name: 'O que significa "massa"?' })
      .isVisible();
    await page.getByText("#0 massa Massa é como falar").isVisible();
    await page
      .getByRole("link", { name: "Visite o site Pop Quest!" })
      .isVisible();
    await page.getByText("Pódio da Comunidade Confira").isVisible();
    await page
      .locator("section")
      .filter({ hasText: "Dicionário de Gírias Pesquise" })
      .isVisible();
    await page
      .locator("section")
      .filter({ hasText: "Não achou o que procurava?" })
      .nth(1)
      .isVisible();
  });
});

test.describe("Faz a busca de palavra mobile Iphone", () => {
  test("Acessa site iphone", async ({ browser }, testInfo) => {
    test.skip(
      testInfo.project.name !== "Mobile Safari",
      "Esse teste roda só no contexto mobile (iPhone 12)"
    );
    const iphone = await browser.newContext({
      ...devices["iPhone 12"],
    });
    const page = await iphone.newPage();
    await page.goto(url);

    await page
      .getByRole("button", { name: "Abrir menu Fechar menu" })
      .isVisible();

    await page
      .getByRole("textbox", { name: "Encontre uma gíria..." })
      .isVisible();

    await page.getByRole("link", { name: "Inserir Gíria" }).isHidden();
    await page.getByRole("link", { name: "Home" }).isHidden();
    await page.getByRole("link", { name: "Meu Perfil" }).isHidden();
    await page.getByRole("link", { name: "Novas Gíria" }).isHidden();
    await page.getByRole("link", { name: "As Mais Famosas" }).isHidden();
    await page.getByRole("link", { name: "Dicionário A-Z" }).isHidden();
    await page.getByRole("link", { name: "Hashtags" }).isHidden();
    await page.getByRole("link", { name: "Blog" }).isHidden();
    await page.getByRole("link", { name: "FAQ" }).isHidden();
    await page.getByRole("link", { name: "Galera" }).isHidden();

    await page.getByText("Gírias que estão na boca do povo:").isVisible();
    await page.getByText("Pódio da Comunidade Confira").first().isVisible();
    await page.getByRole("heading", { name: "Gíria do dia:" }).isVisible();
    await page.getByRole("contentinfo").isVisible();
  });

  test("Busca palavra iphone", async ({ browser }, testInfo) => {
    test.skip(
      testInfo.project.name !== "Mobile Safari",
      "Esse teste roda só no contexto mobile (iPhone 12)"
    );
    const iphone = await browser.newContext({
      ...devices["iPhone 12"],
    });
    const page = await iphone.newPage();
    await page.goto(url);
    await page
      .getByRole("textbox", { name: "Encontre uma gíria..." })
      .isVisible();
    await page
      .getByRole("textbox", { name: "Encontre uma gíria..." })
      .fill("massa");
    await page.goto("https://qualeagiria.com.br/giria/massa");
    await page
      .getByRole("heading", { name: "Significado de: massa" })
      .isVisible();
    await page
      .getByRole("heading", { name: 'O que significa "massa"?' })
      .isVisible();
  });

  test("Clica botão voltar ao topo", async ({ browser }, testInfo) => {
    test.skip(
      testInfo.project.name !== "Mobile Safari",
      "Esse teste roda só no contexto mobile (iPhone 12)"
    );
    const iphone = await browser.newContext({
      ...devices["iPhone 12"],
    });
    const page = await iphone.newPage();
    await page.goto(url);
    await page.getByRole("contentinfo").scrollIntoViewIfNeeded();
    await page.getByRole("contentinfo").isVisible();
    await page
      .getByText(
        "Este site utiliza cookies para melhorar a experiência do usuário. Aceitar"
      )
      .isVisible();
    await page.getByRole("button", { name: "Aceitar" }).click();
    await page.getByRole("button", { name: "Voltar ao topo" }).isVisible();
    await page.getByRole("button", { name: "Voltar ao topo" }).click();
  });

  test("Texto do rodapé visível no mobile ios", async ({ browser,page,}, testInfo) => {
    test.skip(
      testInfo.project.name !== "Mobile Safari",
      "Esse teste roda só no contexto mobile (iPhone 12)"
    );
    const iphone = await browser.newContext({
      ...devices["iPhone 12"],
    });

    await page.goto(url);

    const footer = page.locator("footer");
    await expect(footer).toBeVisible();

    const texto = page.locator("footer >> text=Qual é a Gíria");
    await expect(texto).toBeVisible();

    const box = await texto.boundingBox();
    const viewport = page.viewportSize();

    expect(viewport).not.toBeNull();
    if (viewport && box) {
      expect(
        box.y + box.height,
        `Texto do tamanho da tela: posição final ${
          box.y + box.height
        }px, limite visível da tela: ${viewport.height}px`
      ).toBeLessThanOrEqual(viewport.height);
    }
  });
});

test.describe("Faz a busca de palavra mobile Android", () => {
  test("Acessa site android", async ({ browser }, testInfo) => {
    test.skip(
      testInfo.project.name !== "Mobile Chrome",
      "Esse teste roda só no contexto mobile (Android Pixel 5)"
    );
    const android = await browser.newContext({
      ...devices["Pixel 5"],
    });
    const page = await android.newPage();
    await page.goto(url);

    await page
      .getByRole("button", { name: "Abrir menu Fechar menu" })
      .isVisible();

    await page
      .getByRole("textbox", { name: "Encontre uma gíria..." })
      .isVisible();

    await page.getByRole("link", { name: "Inserir Gíria" }).isHidden();
    await page.getByRole("link", { name: "Home" }).isHidden();
    await page.getByRole("link", { name: "Meu Perfil" }).isHidden();
    await page.getByRole("link", { name: "Novas Gíria" }).isHidden();
    await page.getByRole("link", { name: "As Mais Famosas" }).isHidden();
    await page.getByRole("link", { name: "Dicionário A-Z" }).isHidden();
    await page.getByRole("link", { name: "Hashtags" }).isHidden();
    await page.getByRole("link", { name: "Blog" }).isHidden();
    await page.getByRole("link", { name: "FAQ" }).isHidden();
    await page.getByRole("link", { name: "Galera" }).isHidden();

    await page.getByText("Gírias que estão na boca do povo:").isVisible();
    await page.getByText("Pódio da Comunidade Confira").first().isVisible();
    await page.getByRole("heading", { name: "Gíria do dia:" }).isVisible();
    await page.getByRole("contentinfo").isVisible();
  });

  test("Busca palavra android", async ({ browser }, testInfo) => {
    test.skip(
      testInfo.project.name !== "Mobile Chrome",
      "Esse teste roda só no contexto mobile (Android Pixel 5)"
    );
    const android = await browser.newContext({
      ...devices["Pixel 5"],
    });
    const page = await android.newPage();
    await page.goto(url);
    await page
      .getByRole("textbox", { name: "Encontre uma gíria..." })
      .isVisible();
    await page
      .getByRole("textbox", { name: "Encontre uma gíria..." })
      .fill("massa");
    await page.goto("https://qualeagiria.com.br/giria/massa");
    await page
      .getByRole("heading", { name: "Significado de: massa" })
      .isVisible();
    await page
      .getByRole("heading", { name: 'O que significa "massa"?' })
      .isVisible();
  });

test('Texto do rodapé visível no mobile android', async ({ browser }, testInfo) => {
    test.skip(
      testInfo.project.name !== "Mobile Chrome",
      "Esse teste roda só no contexto mobile (Android Pixel 5)"
    );
    const android = await browser.newContext({
      ...devices["Pixel 5"],
    });
    const page = await android.newPage();
  
     await page.goto(url);

  const footer = page.locator('footer');
  await expect(footer).toBeVisible();

  const texto = page.locator('footer >> text=Qual é a Gíria');
  await expect(texto).toBeVisible();

  const box = await texto.boundingBox();
  const viewport = page.viewportSize();

  expect(viewport).not.toBeNull();
  if (viewport && box) {
   expect(box.y + box.height, `Texto do tamanho da tela: posição final ${box.y + box.height}px, limite visível da tela: ${viewport.height}px`
).toBeLessThanOrEqual(viewport.height);
  }
});
});
