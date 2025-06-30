import { test, expect, request, devices } from "@playwright/test";
import { describe } from "node:test";

const url = "https://qualeagiria.com.br/";

test.describe("Acessa Pagina Dicionario A-Z e utiliza letras", () => {
  test.beforeAll(({}, testInfo) => {
    const projetosMobile = ['Mobile Safari', 'Mobile Chrome'];
    test.skip(projetosMobile.includes(testInfo.project.name),`Este grupo de testes é ignorado em projetos mobile: ${testInfo.project.name}` );
  });
  test("Status de acesso do site", async () => {
    const context = await request.newContext();
    const response = await context.get(url);
    expect(response.status()).toBe(200);
  });

  test("Status de acesso na pagina de dicionario", async ({ page }) => {
    await page.goto(url);
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    const context = await request.newContext();
    const response = await context.get("https://qualeagiria.com.br/a-z");
    expect(response.status()).toBe(200);
  });

  test("Acesso na pagina de dicionario", async ({ page }) => {
    await page.goto(url);
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    expect(page.url()).toBe("https://qualeagiria.com.br/a-z");
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
  });

  test("Testa letra A do dicionario", async ({ page }) => {
    await page.goto("https://qualeagiria.com.br/a-z/");
    await page.getByRole("link", { name: "A", exact: true }).nth(1).click();

    const expectedUrl = "https://qualeagiria.com.br//a-z/letra-a";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Testa letra B do dicionario", async ({ page }) => {
    await page.goto("https://qualeagiria.com.br/a-z/");
    await page.getByRole("link", { name: "B", exact: true }).nth(1).click();

    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-b";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Testa letra C do dicionario", async ({ page }) => {
    await page.goto("https://qualeagiria.com.br/a-z/");
    await page.getByRole("link", { name: "C", exact: true }).nth(1).click();

    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-c";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Testa letra D do dicionario", async ({ page }) => {
    await page.goto("https://qualeagiria.com.br/a-z/");
    await page.getByRole("link", { name: "D", exact: true }).nth(1).click();

    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-d";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Testa letra E do dicionario", async ({ page }) => {
    await page.goto("https://qualeagiria.com.br/a-z/");
    await page.getByRole("link", { name: "E", exact: true }).nth(1).click();

    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-e";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Testa letra F do dicionario", async ({ page }) => {
    await page.goto("https://qualeagiria.com.br/a-z/");
    await page.getByRole("link", { name: "F", exact: true }).nth(1).click();

    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-f";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Testa letra G do dicionario", async ({ page }) => {
    await page.goto("https://qualeagiria.com.br/a-z/");
    await page.getByRole("link", { name: "G", exact: true }).nth(1).click();

    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-g";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Testa letra H do dicionario", async ({ page }) => {
    await page.goto("https://qualeagiria.com.br/a-z/");
    await page.getByRole("link", { name: "H", exact: true }).nth(1).click();

    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-h";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Testa letra I do dicionario", async ({ page }) => {
    await page.goto("https://qualeagiria.com.br/a-z/");
    await page.getByRole("link", { name: "I", exact: true }).nth(1).click();

    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-i";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Testa letra J do dicionario", async ({ page }) => {
    await page.goto("https://qualeagiria.com.br/a-z/");
    await page.getByRole("link", { name: "J", exact: true }).nth(1).click();

    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-j";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Testa letra K do dicionario", async ({ page }) => {
    await page.goto("https://qualeagiria.com.br/a-z/");
    await page.getByRole("link", { name: "K", exact: true }).nth(1).click();

    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-k";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Testa letra L do dicionario", async ({ page }) => {
    await page.goto("https://qualeagiria.com.br/a-z/");
    await page.getByRole("link", { name: "L", exact: true }).nth(1).click();

    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-l";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Testa letra M do dicionario", async ({ page }) => {
    await page.goto("https://qualeagiria.com.br/a-z/");
    await page.getByRole("link", { name: "M", exact: true }).nth(1).click();

    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-m";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Testa letra N do dicionario", async ({ page }) => {
    await page.goto("https://qualeagiria.com.br/a-z/");
    await page.getByRole("link", { name: "N", exact: true }).nth(1).click();

    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-n";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Testa letra O do dicionario", async ({ page }) => {
    await page.goto("https://qualeagiria.com.br/a-z/");
    await page.getByRole("link", { name: "O", exact: true }).nth(1).click();

    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-o";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Testa letra P do dicionario", async ({ page }) => {
    await page.goto("https://qualeagiria.com.br/a-z/");
    await page.getByRole("link", { name: "P", exact: true }).nth(1).click();

    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-p";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Testa letra Q do dicionario", async ({ page }) => {
    await page.goto("https://qualeagiria.com.br/a-z/");
    await page.getByRole("link", { name: "P", exact: true }).nth(1).click();

    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-q";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Testa letra R do dicionario", async ({ page }) => {
    await page.goto("https://qualeagiria.com.br/a-z/");
    await page.getByRole("link", { name: "Q", exact: true }).nth(1).click();

    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-r";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Testa letra S do dicionario", async ({ page }) => {
    await page.goto("https://qualeagiria.com.br/a-z/");
    await page.getByRole("link", { name: "R", exact: true }).nth(1).click();

    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-s";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Testa letra T do dicionario", async ({ page }) => {
    await page.goto("https://qualeagiria.com.br/a-z/");
    await page.getByRole("link", { name: "S", exact: true }).nth(1).click();

    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-t";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Testa letra U do dicionario", async ({ page }) => {
    await page.goto("https://qualeagiria.com.br/a-z/");
    await page.getByRole("link", { name: "U", exact: true }).nth(1).click();

    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-u";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Testa letra V do dicionario", async ({ page }) => {
    await page.goto("https://qualeagiria.com.br/a-z/");
    await page.getByRole("link", { name: "V", exact: true }).nth(1).click();

    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-v";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Testa letra W do dicionario", async ({ page }) => {
    await page.goto("https://qualeagiria.com.br/a-z/");
    await page.getByRole("link", { name: "W", exact: true }).nth(1).click();

    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-w";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Testa letra X do dicionario", async ({ page }) => {
    await page.goto("https://qualeagiria.com.br/a-z/");
    await page.getByRole("link", { name: "X", exact: true }).nth(1).click();

    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-x";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Testa letra Z do dicionario", async ({ page }) => {
    await page.goto("https://qualeagiria.com.br/a-z/");
    await page.getByRole("link", { name: "Z", exact: true }).nth(1).click();

    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-z";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });
});

test.describe("Acessa a Pagina Dicionario A-Z e utiliza os outros campos da pagina", () => {
  test.beforeAll(({}, testInfo) => {
    const projetosMobile = ['Mobile Safari', 'Mobile Chrome'];
    test.skip(projetosMobile.includes(testInfo.project.name),`Este grupo de testes é ignorado em projetos mobile: ${testInfo.project.name}` );
  });
  test("Acessa popquest! na pagina de dicionario", async ({ page }) => {
    await page.goto(url);
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    expect(page.url()).toBe("https://qualeagiria.com.br/a-z");
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

    await page
      .locator("section")
      .filter({ hasText: "Não achou o que procurava?" })
      .isVisible();

    await page.getByText("Gírias que estão na boca do povo:").isVisible();

    await page
      .getByRole("link", { name: "Visite o site Pop Quest!" })
      .isVisible();
    await page.getByRole("link", { name: "Visite o site Pop Quest!" }).click();
    const currentUrl = page.url();
    const expectedStart = "https://popquest.news/";

    if (!currentUrl.startsWith(expectedStart)) {
      throw new Error(
        `URL não deveria ser essa. Esperado que começasse com "${expectedStart}", mas foi "${currentUrl}"`
      );
    }
  });

  test("Acessa mais girias na boca do povo na pagina de dicionario", async ({
    page,
  }) => {
    await page.goto(url);
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    expect(page.url()).toBe("https://qualeagiria.com.br/a-z");
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

    await page
      .locator("section")
      .filter({ hasText: "Não achou o que procurava?" })
      .isVisible();

    await page
      .getByRole("link", { name: "Visite o site Pop Quest!" })
      .isVisible();

    await page.getByText("Gírias que estão na boca do povo:").isVisible();
    await page.getByRole("link", { name: "Ver mais gírias" }).click();
    expect(page.url()).toBe("https://qualeagiria.com.br/top");
  });

  test("Acessa cassificação completa podio da comunidade na pagina de dicionario", async ({
    page,
  }) => {
    await page.goto(url);
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    expect(page.url()).toBe("https://qualeagiria.com.br/a-z");
    await page.getByText("Login A B C D E F G H I J K L").isVisible();

    await page
      .getByRole("textbox", { name: "Encontre uma gíria..." })
      .isVisible();

    await page
      .getByRole("navigation")
      .filter({ hasText: "Inserir Gíria Home Login" })
      .locator("div")
      .isVisible();

    await page
      .locator("section")
      .filter({ hasText: "Dicionário de Gírias Pesquise" })
      .isVisible();

    await page
      .locator("section")
      .filter({ hasText: "Não achou o que procurava?" })
      .isVisible();

    await page
      .getByRole("link", { name: "Visite o site Pop Quest!" })
      .isVisible();

    await page.getByText("Gírias que estão na boca do povo:").isVisible();

    await page.getByText("Pódio da Comunidade Confira").nth(1).isVisible();

    await page
      .getByRole("link", { name: "Ver classificação completa" })
      .click();
    expect(page.url()).toBe("https://qualeagiria.com.br/galera/podio/semanal");
  });

  test("Acessa Adicionar uma giria na pagina de dicionario", async ({
    page,
  }) => {
    await page.goto(url);
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    expect(page.url()).toBe("https://qualeagiria.com.br/a-z");
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
  });
});

test.describe("Acessa a Pagina Dicionario A-Z e Dicionario lateral", () => {
  test.beforeAll(({}, testInfo) => {
    const projetosMobile = ['Mobile Safari', 'Mobile Chrome'];
    test.skip(projetosMobile.includes(testInfo.project.name),`Este grupo de testes é ignorado em projetos mobile: ${testInfo.project.name}` );
  });
  test("Acesso dicionario de girias na pagina de dicionario letra A", async ({
    page,
  }) => {
    await page.goto(url);
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    expect(page.url()).toBe("https://qualeagiria.com.br/a-z");
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
      .filter({ hasText: "Não achou o que procurava?" })
      .isVisible();

    await page
      .getByRole("link", { name: "Visite o site Pop Quest!" })
      .isVisible();

    await page.getByText("Gírias que estão na boca do povo:").isVisible();

    await page
      .locator("section")
      .filter({ hasText: "Dicionário de Gírias Pesquise" })
      .isVisible();

    await page.getByRole("link", { name: "A", exact: true }).nth(2).click();
    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-a";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Acesso dicionario de girias na pagina de dicionario letra B", async ({
    page,
  }) => {
    await page.goto(url);
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    expect(page.url()).toBe("https://qualeagiria.com.br/a-z");
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
      .filter({ hasText: "Não achou o que procurava?" })
      .isVisible();

    await page
      .getByRole("link", { name: "Visite o site Pop Quest!" })
      .isVisible();

    await page.getByText("Gírias que estão na boca do povo:").isVisible();

    await page
      .locator("section")
      .filter({ hasText: "Dicionário de Gírias Pesquise" })
      .isVisible();

    await page.getByRole("link", { name: "B", exact: true }).nth(2).click();
    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-b";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Acesso dicionario de girias na pagina de dicionario letra C", async ({
    page,
  }) => {
    await page.goto(url);
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    expect(page.url()).toBe("https://qualeagiria.com.br/a-z");
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
      .filter({ hasText: "Não achou o que procurava?" })
      .isVisible();

    await page
      .getByRole("link", { name: "Visite o site Pop Quest!" })
      .isVisible();

    await page.getByText("Gírias que estão na boca do povo:").isVisible();

    await page
      .locator("section")
      .filter({ hasText: "Dicionário de Gírias Pesquise" })
      .isVisible();

    await page.getByRole("link", { name: "C", exact: true }).nth(2).click();
    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-c";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Acesso dicionario de girias na pagina de dicionario letra D", async ({
    page,
  }) => {
    await page.goto(url);
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    expect(page.url()).toBe("https://qualeagiria.com.br/a-z");
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
      .filter({ hasText: "Não achou o que procurava?" })
      .isVisible();

    await page
      .getByRole("link", { name: "Visite o site Pop Quest!" })
      .isVisible();

    await page.getByText("Gírias que estão na boca do povo:").isVisible();

    await page
      .locator("section")
      .filter({ hasText: "Dicionário de Gírias Pesquise" })
      .isVisible();

    await page.getByRole("link", { name: "D", exact: true }).nth(2).click();
    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-d";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Acesso dicionario de girias na pagina de dicionario letra E", async ({
    page,
  }) => {
    await page.goto(url);
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    expect(page.url()).toBe("https://qualeagiria.com.br/a-z");
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
      .filter({ hasText: "Não achou o que procurava?" })
      .isVisible();

    await page
      .getByRole("link", { name: "Visite o site Pop Quest!" })
      .isVisible();

    await page.getByText("Gírias que estão na boca do povo:").isVisible();

    await page
      .locator("section")
      .filter({ hasText: "Dicionário de Gírias Pesquise" })
      .isVisible();

    await page.getByRole("link", { name: "E", exact: true }).nth(2).click();
    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-e";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Acesso dicionario de girias na pagina de dicionario letra F", async ({
    page,
  }) => {
    await page.goto(url);
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    expect(page.url()).toBe("https://qualeagiria.com.br/a-z");
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
      .filter({ hasText: "Não achou o que procurava?" })
      .isVisible();

    await page
      .getByRole("link", { name: "Visite o site Pop Quest!" })
      .isVisible();

    await page.getByText("Gírias que estão na boca do povo:").isVisible();

    await page
      .locator("section")
      .filter({ hasText: "Dicionário de Gírias Pesquise" })
      .isVisible();

    await page.getByRole("link", { name: "F", exact: true }).nth(2).click();
    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-f";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Acesso dicionario de girias na pagina de dicionario letra G", async ({
    page,
  }) => {
    await page.goto(url);
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    expect(page.url()).toBe("https://qualeagiria.com.br/a-z");
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
      .filter({ hasText: "Não achou o que procurava?" })
      .isVisible();

    await page
      .getByRole("link", { name: "Visite o site Pop Quest!" })
      .isVisible();

    await page.getByText("Gírias que estão na boca do povo:").isVisible();

    await page
      .locator("section")
      .filter({ hasText: "Dicionário de Gírias Pesquise" })
      .isVisible();

    await page.getByRole("link", { name: "G", exact: true }).nth(2).click();
    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-g";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Acesso dicionario de girias na pagina de dicionario letra H", async ({
    page,
  }) => {
    await page.goto(url);
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    expect(page.url()).toBe("https://qualeagiria.com.br/a-z");
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
      .filter({ hasText: "Não achou o que procurava?" })
      .isVisible();

    await page
      .getByRole("link", { name: "Visite o site Pop Quest!" })
      .isVisible();

    await page.getByText("Gírias que estão na boca do povo:").isVisible();

    await page
      .locator("section")
      .filter({ hasText: "Dicionário de Gírias Pesquise" })
      .isVisible();

    await page.getByRole("link", { name: "H", exact: true }).nth(2).click();
    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-h";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Acesso dicionario de girias na pagina de dicionario letra I", async ({
    page,
  }) => {
    await page.goto(url);
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    expect(page.url()).toBe("https://qualeagiria.com.br/a-z");
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
      .filter({ hasText: "Não achou o que procurava?" })
      .isVisible();

    await page
      .getByRole("link", { name: "Visite o site Pop Quest!" })
      .isVisible();

    await page.getByText("Gírias que estão na boca do povo:").isVisible();

    await page
      .locator("section")
      .filter({ hasText: "Dicionário de Gírias Pesquise" })
      .isVisible();

    await page.getByRole("link", { name: "I", exact: true }).nth(2).click();
    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-i";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Acesso dicionario de girias na pagina de dicionario letra J", async ({
    page,
  }) => {
    await page.goto(url);
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    expect(page.url()).toBe("https://qualeagiria.com.br/a-z");
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
      .filter({ hasText: "Não achou o que procurava?" })
      .isVisible();

    await page
      .getByRole("link", { name: "Visite o site Pop Quest!" })
      .isVisible();

    await page.getByText("Gírias que estão na boca do povo:").isVisible();

    await page
      .locator("section")
      .filter({ hasText: "Dicionário de Gírias Pesquise" })
      .isVisible();

    await page.getByRole("link", { name: "J", exact: true }).nth(2).click();
    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-j";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Acesso dicionario de girias na pagina de dicionario letra K", async ({
    page,
  }) => {
    await page.goto(url);
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    expect(page.url()).toBe("https://qualeagiria.com.br/a-z");
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
      .filter({ hasText: "Não achou o que procurava?" })
      .isVisible();

    await page
      .getByRole("link", { name: "Visite o site Pop Quest!" })
      .isVisible();

    await page.getByText("Gírias que estão na boca do povo:").isVisible();

    await page
      .locator("section")
      .filter({ hasText: "Dicionário de Gírias Pesquise" })
      .isVisible();

    await page.getByRole("link", { name: "K", exact: true }).nth(2).click();
    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-k";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Acesso dicionario de girias na pagina de dicionario letra L", async ({
    page,
  }) => {
    await page.goto(url);
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    expect(page.url()).toBe("https://qualeagiria.com.br/a-z");
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
      .filter({ hasText: "Não achou o que procurava?" })
      .isVisible();

    await page
      .getByRole("link", { name: "Visite o site Pop Quest!" })
      .isVisible();

    await page.getByText("Gírias que estão na boca do povo:").isVisible();

    await page
      .locator("section")
      .filter({ hasText: "Dicionário de Gírias Pesquise" })
      .isVisible();

    await page.getByRole("link", { name: "L", exact: true }).nth(2).click();
    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-l";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Acesso dicionario de girias na pagina de dicionario letra M", async ({
    page,
  }) => {
    await page.goto(url);
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    expect(page.url()).toBe("https://qualeagiria.com.br/a-z");
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
      .filter({ hasText: "Não achou o que procurava?" })
      .isVisible();

    await page
      .getByRole("link", { name: "Visite o site Pop Quest!" })
      .isVisible();

    await page.getByText("Gírias que estão na boca do povo:").isVisible();

    await page
      .locator("section")
      .filter({ hasText: "Dicionário de Gírias Pesquise" })
      .isVisible();

    await page.getByRole("link", { name: "M", exact: true }).nth(2).click();
    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-m";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Acesso dicionario de girias na pagina de dicionario letra N", async ({
    page,
  }) => {
    await page.goto(url);
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    expect(page.url()).toBe("https://qualeagiria.com.br/a-z");
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
      .filter({ hasText: "Não achou o que procurava?" })
      .isVisible();

    await page
      .getByRole("link", { name: "Visite o site Pop Quest!" })
      .isVisible();

    await page.getByText("Gírias que estão na boca do povo:").isVisible();

    await page
      .locator("section")
      .filter({ hasText: "Dicionário de Gírias Pesquise" })
      .isVisible();

    await page.getByRole("link", { name: "N", exact: true }).nth(2).click();
    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-n";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Acesso dicionario de girias na pagina de dicionario letra O", async ({
    page,
  }) => {
    await page.goto(url);
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    expect(page.url()).toBe("https://qualeagiria.com.br/a-z");
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
      .filter({ hasText: "Não achou o que procurava?" })
      .isVisible();

    await page
      .getByRole("link", { name: "Visite o site Pop Quest!" })
      .isVisible();

    await page.getByText("Gírias que estão na boca do povo:").isVisible();

    await page
      .locator("section")
      .filter({ hasText: "Dicionário de Gírias Pesquise" })
      .isVisible();

    await page.getByRole("link", { name: "O", exact: true }).nth(2).click();
    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-o";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Acesso dicionario de girias na pagina de dicionario letra P", async ({
    page,
  }) => {
    await page.goto(url);
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    expect(page.url()).toBe("https://qualeagiria.com.br/a-z");
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
      .filter({ hasText: "Não achou o que procurava?" })
      .isVisible();

    await page
      .getByRole("link", { name: "Visite o site Pop Quest!" })
      .isVisible();

    await page.getByText("Gírias que estão na boca do povo:").isVisible();

    await page
      .locator("section")
      .filter({ hasText: "Dicionário de Gírias Pesquise" })
      .isVisible();

    await page.getByRole("link", { name: "P", exact: true }).nth(2).click();
    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-p";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Acesso dicionario de girias na pagina de dicionario letra Q", async ({
    page,
  }) => {
    await page.goto(url);
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    expect(page.url()).toBe("https://qualeagiria.com.br/a-z");
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
      .filter({ hasText: "Não achou o que procurava?" })
      .isVisible();

    await page
      .getByRole("link", { name: "Visite o site Pop Quest!" })
      .isVisible();

    await page.getByText("Gírias que estão na boca do povo:").isVisible();

    await page
      .locator("section")
      .filter({ hasText: "Dicionário de Gírias Pesquise" })
      .isVisible();

    await page.getByRole("link", { name: "Q", exact: true }).nth(2).click();
    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-q";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Acesso dicionario de girias na pagina de dicionario letra R", async ({
    page,
  }) => {
    await page.goto(url);
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    expect(page.url()).toBe("https://qualeagiria.com.br/a-z");
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
      .filter({ hasText: "Não achou o que procurava?" })
      .isVisible();

    await page
      .getByRole("link", { name: "Visite o site Pop Quest!" })
      .isVisible();

    await page.getByText("Gírias que estão na boca do povo:").isVisible();

    await page
      .locator("section")
      .filter({ hasText: "Dicionário de Gírias Pesquise" })
      .isVisible();

    await page.getByRole("link", { name: "R", exact: true }).nth(2).click();
    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-r";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Acesso dicionario de girias na pagina de dicionario letra S", async ({
    page,
  }) => {
    await page.goto(url);
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    expect(page.url()).toBe("https://qualeagiria.com.br/a-z");
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
      .filter({ hasText: "Não achou o que procurava?" })
      .isVisible();

    await page
      .getByRole("link", { name: "Visite o site Pop Quest!" })
      .isVisible();

    await page.getByText("Gírias que estão na boca do povo:").isVisible();

    await page
      .locator("section")
      .filter({ hasText: "Dicionário de Gírias Pesquise" })
      .isVisible();

    await page.getByRole("link", { name: "S", exact: true }).nth(2).click();
    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-s";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Acesso dicionario de girias na pagina de dicionario letra T", async ({
    page,
  }) => {
    await page.goto(url);
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    expect(page.url()).toBe("https://qualeagiria.com.br/a-z");
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
      .filter({ hasText: "Não achou o que procurava?" })
      .isVisible();

    await page
      .getByRole("link", { name: "Visite o site Pop Quest!" })
      .isVisible();

    await page.getByText("Gírias que estão na boca do povo:").isVisible();

    await page
      .locator("section")
      .filter({ hasText: "Dicionário de Gírias Pesquise" })
      .isVisible();

    await page.getByRole("link", { name: "T", exact: true }).nth(2).click();
    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-t";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Acesso dicionario de girias na pagina de dicionario letra U", async ({
    page,
  }) => {
    await page.goto(url);
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    expect(page.url()).toBe("https://qualeagiria.com.br/a-z");
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
      .filter({ hasText: "Não achou o que procurava?" })
      .isVisible();

    await page
      .getByRole("link", { name: "Visite o site Pop Quest!" })
      .isVisible();

    await page.getByText("Gírias que estão na boca do povo:").isVisible();

    await page
      .locator("section")
      .filter({ hasText: "Dicionário de Gírias Pesquise" })
      .isVisible();

    await page.getByRole("link", { name: "U", exact: true }).nth(2).click();
    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-u";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Acesso dicionario de girias na pagina de dicionario letra V", async ({
    page,
  }) => {
    await page.goto(url);
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    expect(page.url()).toBe("https://qualeagiria.com.br/a-z");
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
      .filter({ hasText: "Não achou o que procurava?" })
      .isVisible();

    await page
      .getByRole("link", { name: "Visite o site Pop Quest!" })
      .isVisible();

    await page.getByText("Gírias que estão na boca do povo:").isVisible();

    await page
      .locator("section")
      .filter({ hasText: "Dicionário de Gírias Pesquise" })
      .isVisible();

    await page.getByRole("link", { name: "V", exact: true }).nth(2).click();
    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-v";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Acesso dicionario de girias na pagina de dicionario letra X", async ({
    page,
  }) => {
    await page.goto(url);
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    expect(page.url()).toBe("https://qualeagiria.com.br/a-z");
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
      .filter({ hasText: "Não achou o que procurava?" })
      .isVisible();

    await page
      .getByRole("link", { name: "Visite o site Pop Quest!" })
      .isVisible();

    await page.getByText("Gírias que estão na boca do povo:").isVisible();

    await page
      .locator("section")
      .filter({ hasText: "Dicionário de Gírias Pesquise" })
      .isVisible();

    await page.getByRole("link", { name: "X", exact: true }).nth(2).click();
    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-x";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Acesso dicionario de girias na pagina de dicionario letra W", async ({
    page,
  }) => {
    await page.goto(url);
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    expect(page.url()).toBe("https://qualeagiria.com.br/a-z");
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
      .filter({ hasText: "Não achou o que procurava?" })
      .isVisible();

    await page
      .getByRole("link", { name: "Visite o site Pop Quest!" })
      .isVisible();

    await page.getByText("Gírias que estão na boca do povo:").isVisible();

    await page
      .locator("section")
      .filter({ hasText: "Dicionário de Gírias Pesquise" })
      .isVisible();

    await page.getByRole("link", { name: "X", exact: true }).nth(2).click();
    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-x";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Acesso dicionario de girias na pagina de dicionario letra Z", async ({
    page,
  }) => {
    await page.goto(url);
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    expect(page.url()).toBe("https://qualeagiria.com.br/a-z");
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
      .filter({ hasText: "Não achou o que procurava?" })
      .isVisible();

    await page
      .getByRole("link", { name: "Visite o site Pop Quest!" })
      .isVisible();

    await page.getByText("Gírias que estão na boca do povo:").isVisible();

    await page
      .locator("section")
      .filter({ hasText: "Dicionário de Gírias Pesquise" })
      .isVisible();

    await page.getByRole("link", { name: "Z", exact: true }).nth(2).click();
    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-z";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });
});

test.describe("Acessa a Pagina Dicionario A-Z mobile Iphone", () => {

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
    await page.getByRole("button", { name: "Abrir menu Fechar menu" }).click();
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    const context = await request.newContext();
    const response = await context.get("https://qualeagiria.com.br/a-z");
  });
}); 

test("Acessa popquest! na pagina de dicionario", async ({ browser }, testInfo) => {
    test.skip(
      testInfo.project.name !== "Mobile Safari",
      "Esse teste roda só no contexto mobile (iPhone 12)"
    );
    const iphone = await browser.newContext({
      ...devices["iPhone 12"],
    });
    const page = await iphone.newPage();
    await page.goto(url);
    await page.getByRole("button", { name: "Abrir menu Fechar menu" }).click();
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    const context = await request.newContext();
    const response = await context.get("https://qualeagiria.com.br/a-z");
    await page
      .getByRole("link", { name: "Visite o site Pop Quest!" })
      .isVisible();
    await page.getByRole("link", { name: "Visite o site Pop Quest!" }).click();
    const currentUrl = page.url();
    const expectedStart = "https://popquest.news/";

    if (!currentUrl.startsWith(expectedStart)) {
      throw new Error(
        `URL não deveria ser essa. Esperado que começasse com "${expectedStart}", mas foi "${currentUrl}"`
      );
    }
  });

test("Acessa veja mais girias na pagina de dicionario", async ({ browser }, testInfo) => {
    test.skip(
      testInfo.project.name !== "Mobile Safari",
      "Esse teste roda só no contexto mobile (iPhone 12)"
    );
    const iphone = await browser.newContext({
      ...devices["iPhone 12"],
    });
    const page = await iphone.newPage();
    await page.goto(url);
    await page.getByRole("button", { name: "Abrir menu Fechar menu" }).click();
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    const context = await request.newContext();
    const response = await context.get("https://qualeagiria.com.br/a-z");
    await page.getByText("Gírias que estão na boca do povo:").isVisible();
    await page.getByRole("link", { name: "Ver mais gírias" }).click();
    expect(page.url()).toBe("https://qualeagiria.com.br/top");
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
    await page.getByRole("button", { name: "Abrir menu Fechar menu" }).click();
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    const context = await request.newContext();
    const response = await context.get("https://qualeagiria.com.br/a-z");
    await page.getByRole('contentinfo').scrollIntoViewIfNeeded();
    await page.getByRole('contentinfo').isVisible();
    await page.getByText('Este site utiliza cookies para melhorar a experiência do usuário. Aceitar').isVisible()
     await page.getByRole('button', { name: 'Aceitar' }).click()
    await page.getByRole('button', { name: 'Voltar ao topo' }).isVisible();
    await page.getByRole('button', { name: 'Voltar ao topo' }).click();
  });

   test("Testa letra A do dicionario", async ({ browser }, testInfo) => {
    test.skip(
      testInfo.project.name !== "Mobile Safari",
      "Esse teste roda só no contexto mobile (iPhone 12)"
    );
    const iphone = await browser.newContext({
      ...devices["iPhone 12"],
    });
    const page = await iphone.newPage();
    await page.goto(url);
    await page.getByRole("button", { name: "Abrir menu Fechar menu" }).click();
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    await page.getByRole('link', { name: 'A', exact: true }).click()
    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-a";
    const currentUrl = page.url();
    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

test("Testa letra B do dicionario", async ({ browser }, testInfo) => {
    test.skip(
      testInfo.project.name !== "Mobile Safari",
      "Esse teste roda só no contexto mobile (iPhone 12)"
    );
    const iphone = await browser.newContext({
      ...devices["iPhone 12"],
    });
    const page = await iphone.newPage();
    await page.goto(url);
    await page.getByRole("button", { name: "Abrir menu Fechar menu" }).click();
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    await page.getByRole('link', { name: 'B', exact: true }).click()
    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-b";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Testa letra C do dicionario", async ({ browser }, testInfo) => {
    test.skip(
      testInfo.project.name !== "Mobile Safari",
      "Esse teste roda só no contexto mobile (iPhone 12)"
    );
    const iphone = await browser.newContext({
      ...devices["iPhone 12"],
    });
    const page = await iphone.newPage();
    await page.goto(url);
    await page.getByRole("button", { name: "Abrir menu Fechar menu" }).click();
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    await page.getByRole('link', { name: 'C', exact: true }).click()
    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-c";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Testa letra D do dicionario", async ({ browser }, testInfo) => {
    test.skip(
      testInfo.project.name !== "Mobile Safari",
      "Esse teste roda só no contexto mobile (iPhone 12)"
    );
    const iphone = await browser.newContext({
      ...devices["iPhone 12"],
    });
    const page = await iphone.newPage();
    await page.goto(url);
    await page.getByRole("button", { name: "Abrir menu Fechar menu" }).click();
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    await page.getByRole('link', { name: 'D', exact: true }).click()
    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-d";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Testa letra E do dicionario", async ({ browser }, testInfo) => {
    test.skip(
      testInfo.project.name !== "Mobile Safari",
      "Esse teste roda só no contexto mobile (iPhone 12)"
    );
    const iphone = await browser.newContext({
      ...devices["iPhone 12"],
    });
    const page = await iphone.newPage();
    await page.goto(url);
    await page.getByRole("button", { name: "Abrir menu Fechar menu" }).click();
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    await page.getByRole('link', { name: 'E', exact: true }).click()
    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-e";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Testa letra F do dicionario", async ({ browser }, testInfo) => {
    test.skip(
      testInfo.project.name !== "Mobile Safari",
      "Esse teste roda só no contexto mobile (iPhone 12)"
    );
    const iphone = await browser.newContext({
      ...devices["iPhone 12"],
    });
    const page = await iphone.newPage();
    await page.goto(url);
    await page.getByRole("button", { name: "Abrir menu Fechar menu" }).click();
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    await page.getByRole('link', { name: 'F', exact: true }).click()
    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-f";
    const currentUrl = page.url();
    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Testa letra G do dicionario", async ({ browser }, testInfo) => {
    test.skip(
      testInfo.project.name !== "Mobile Safari",
      "Esse teste roda só no contexto mobile (iPhone 12)"
    );
    const iphone = await browser.newContext({
      ...devices["iPhone 12"],
    });
    const page = await iphone.newPage();
    await page.goto(url);
    await page.getByRole("button", { name: "Abrir menu Fechar menu" }).click();
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    await page.getByRole('link', { name: 'G', exact: true }).click()

    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-g";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Testa letra H do dicionario", async ({ browser }, testInfo) => {
    test.skip(
      testInfo.project.name !== "Mobile Safari",
      "Esse teste roda só no contexto mobile (iPhone 12)"
    );
    const iphone = await browser.newContext({
      ...devices["iPhone 12"],
    });
    const page = await iphone.newPage();
    await page.goto(url);
    await page.getByRole("button", { name: "Abrir menu Fechar menu" }).click();
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    await page.getByRole('link', { name: 'H', exact: true }).click()
    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-h";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Testa letra I do dicionario", async ({ browser }, testInfo) => {
    test.skip(
      testInfo.project.name !== "Mobile Safari",
      "Esse teste roda só no contexto mobile (iPhone 12)"
    );
    const iphone = await browser.newContext({
      ...devices["iPhone 12"],
    });
    const page = await iphone.newPage();
    await page.goto(url);
    await page.getByRole("button", { name: "Abrir menu Fechar menu" }).click();
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    await page.getByRole('link', { name: 'I', exact: true }).click()
    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-i";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Testa letra J do dicionario", async ({ browser }, testInfo) => {
    test.skip(
      testInfo.project.name !== "Mobile Safari",
      "Esse teste roda só no contexto mobile (iPhone 12)"
    );
    const iphone = await browser.newContext({
      ...devices["iPhone 12"],
    });
    const page = await iphone.newPage();
    await page.goto(url);
    await page.getByRole("button", { name: "Abrir menu Fechar menu" }).click();
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    await page.getByRole('link', { name: 'J', exact: true }).click()

    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-j";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Testa letra K do dicionario", async ({ browser }, testInfo) => {
    test.skip(
      testInfo.project.name !== "Mobile Safari",
      "Esse teste roda só no contexto mobile (iPhone 12)"
    );
    const iphone = await browser.newContext({
      ...devices["iPhone 12"],
    });
    const page = await iphone.newPage();
    await page.goto(url);
    await page.getByRole("button", { name: "Abrir menu Fechar menu" }).click();
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    await page.getByRole('link', { name: 'K', exact: true }).click()

    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-k";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Testa letra L do dicionario", async ({ browser }, testInfo) => {
    test.skip(
      testInfo.project.name !== "Mobile Safari",
      "Esse teste roda só no contexto mobile (iPhone 12)"
    );
    const iphone = await browser.newContext({
      ...devices["iPhone 12"],
    });
    const page = await iphone.newPage();
    await page.goto(url);
    await page.getByRole("button", { name: "Abrir menu Fechar menu" }).click();
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    await page.getByRole('link', { name: 'L', exact: true }).click()

    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-l";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Testa letra M do dicionario", async ({ browser }, testInfo) => {
    test.skip(
      testInfo.project.name !== "Mobile Safari",
      "Esse teste roda só no contexto mobile (iPhone 12)"
    );
    const iphone = await browser.newContext({
      ...devices["iPhone 12"],
    });
    const page = await iphone.newPage();
    await page.goto(url);
    await page.getByRole("button", { name: "Abrir menu Fechar menu" }).click();
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    await page.getByRole('link', { name: 'M', exact: true }).click()

    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-m";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Testa letra N do dicionario", async ({ browser }, testInfo) => {
    test.skip(
      testInfo.project.name !== "Mobile Safari",
      "Esse teste roda só no contexto mobile (iPhone 12)"
    );
    const iphone = await browser.newContext({
      ...devices["iPhone 12"],
    });
    const page = await iphone.newPage();
    await page.goto(url);
    await page.getByRole("button", { name: "Abrir menu Fechar menu" }).click();
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    await page.getByRole('link', { name: 'N', exact: true }).click()

    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-n";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Testa letra O do dicionario", async ({ browser }, testInfo) => {
    test.skip(
      testInfo.project.name !== "Mobile Safari",
      "Esse teste roda só no contexto mobile (iPhone 12)"
    );
    const iphone = await browser.newContext({
      ...devices["iPhone 12"],
    });
    const page = await iphone.newPage();
    await page.goto(url);
    await page.getByRole("button", { name: "Abrir menu Fechar menu" }).click();
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    await page.getByRole('link', { name: 'O', exact: true }).click()

    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-o";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Testa letra P do dicionario", async ({ browser }, testInfo) => {
    test.skip(
      testInfo.project.name !== "Mobile Safari",
      "Esse teste roda só no contexto mobile (iPhone 12)"
    );
    const iphone = await browser.newContext({
      ...devices["iPhone 12"],
    });
    const page = await iphone.newPage();
    await page.goto(url);
    await page.getByRole("button", { name: "Abrir menu Fechar menu" }).click();
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    await page.getByRole('link', { name: 'P', exact: true }).click()

    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-p";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Testa letra Q do dicionario", async ({ browser }, testInfo) => {
    test.skip(
      testInfo.project.name !== "Mobile Safari",
      "Esse teste roda só no contexto mobile (iPhone 12)"
    );
    const iphone = await browser.newContext({
      ...devices["iPhone 12"],
    });
    const page = await iphone.newPage();
    await page.goto(url);
    await page.getByRole("button", { name: "Abrir menu Fechar menu" }).click();
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    await page.getByRole('link', { name: 'Q', exact: true }).click()

    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-q";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Testa letra R do dicionario", async ({ browser }, testInfo) => {
    test.skip(
      testInfo.project.name !== "Mobile Safari",
      "Esse teste roda só no contexto mobile (iPhone 12)"
    );
    const iphone = await browser.newContext({
      ...devices["iPhone 12"],
    });
    const page = await iphone.newPage();
    await page.goto(url);
    await page.getByRole("button", { name: "Abrir menu Fechar menu" }).click();
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    await page.getByRole('link', { name: 'R', exact: true }).click()

    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-r";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Testa letra S do dicionario", async ({ browser }, testInfo) => {
    test.skip(
      testInfo.project.name !== "Mobile Safari",
      "Esse teste roda só no contexto mobile (iPhone 12)"
    );
    const iphone = await browser.newContext({
      ...devices["iPhone 12"],
    });
    const page = await iphone.newPage();
    await page.goto(url);
    await page.getByRole("button", { name: "Abrir menu Fechar menu" }).click();
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    await page.getByRole('link', { name: 'S', exact: true }).click()

    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-s";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Testa letra T do dicionario", async ({ browser }, testInfo) => {
    test.skip(
      testInfo.project.name !== "Mobile Safari",
      "Esse teste roda só no contexto mobile (iPhone 12)"
    );
    const iphone = await browser.newContext({
      ...devices["iPhone 12"],
    });
    const page = await iphone.newPage();
    await page.goto(url);
    await page.getByRole("button", { name: "Abrir menu Fechar menu" }).click();
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    await page.getByRole('link', { name: 'T', exact: true }).click()

    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-t";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Testa letra U do dicionario", async ({ browser }, testInfo) => {
    test.skip(
      testInfo.project.name !== "Mobile Safari",
      "Esse teste roda só no contexto mobile (iPhone 12)"
    );
    const iphone = await browser.newContext({
      ...devices["iPhone 12"],
    });
    const page = await iphone.newPage();
    await page.goto(url);
    await page.getByRole("button", { name: "Abrir menu Fechar menu" }).click();
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    await page.getByRole('link', { name: 'U', exact: true }).click()

    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-u";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Testa letra V do dicionario", async ({ browser }, testInfo) => {
    test.skip(
      testInfo.project.name !== "Mobile Safari",
      "Esse teste roda só no contexto mobile (iPhone 12)"
    );
    const iphone = await browser.newContext({
      ...devices["iPhone 12"],
    });
    const page = await iphone.newPage();
    await page.goto(url);
    await page.getByRole("button", { name: "Abrir menu Fechar menu" }).click();
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    await page.getByRole('link', { name: 'V', exact: true }).click()

    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-v";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Testa letra W do dicionario", async ({ browser }, testInfo) => {
    test.skip(
      testInfo.project.name !== "Mobile Safari",
      "Esse teste roda só no contexto mobile (iPhone 12)"
    );
    const iphone = await browser.newContext({
      ...devices["iPhone 12"],
    });
    const page = await iphone.newPage();
    await page.goto(url);
    await page.getByRole("button", { name: "Abrir menu Fechar menu" }).click();
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    await page.getByRole('link', { name: 'W', exact: true }).click()

    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-w";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

test("Testa letra X do dicionario", async ({ browser }, testInfo) => {
    test.skip(
      testInfo.project.name !== "Mobile Safari",
      "Esse teste roda só no contexto mobile (iPhone 12)"
    );
    const iphone = await browser.newContext({
      ...devices["iPhone 12"],
    });
    const page = await iphone.newPage();
    await page.goto(url);
    await page.getByRole("button", { name: "Abrir menu Fechar menu" }).click();
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    await page.getByRole('link', { name: 'X', exact: true }).click()

    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-x";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Testa letra Z do dicionario", async ({ browser }, testInfo) => {
    test.skip(
      testInfo.project.name !== "Mobile Safari",
      "Esse teste roda só no contexto mobile (iPhone 12)"
    );
    const iphone = await browser.newContext({
      ...devices["iPhone 12"],
    });
    const page = await iphone.newPage();
    await page.goto(url);
    await page.getByRole("button", { name: "Abrir menu Fechar menu" }).click();
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    await page.getByRole('link', { name: 'Z', exact: true }).click()

    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-z";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

test.describe("Acessa a Pagina Dicionario A-Z mobile Android", () => {
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
    await page.getByRole("button", { name: "Abrir menu Fechar menu" }).click();
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    const context = await request.newContext();
    const response = await context.get("https://qualeagiria.com.br/a-z");
  });

test("Acessa popquest! na pagina de dicionario", async ({browser}, testInfo) => {
    test.skip(testInfo.project.name !== "Mobile Chrome","Esse teste roda só no contexto mobile (Android Pixel 5)");
    const android = await browser.newContext({
      ...devices["Pixel 5"],
    });
    const page = await android.newPage();
    await page.goto(url);
    await page.getByRole("button", { name: "Abrir menu Fechar menu" }).click();
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    const context = await request.newContext();
    const response = await context.get("https://qualeagiria.com.br/a-z");
    await page
      .getByRole("link", { name: "Visite o site Pop Quest!" })
      .isVisible();
    await page.getByRole("link", { name: "Visite o site Pop Quest!" }).click();
    const currentUrl = page.url();
    const expectedStart = "https://popquest.news/";

    if (!currentUrl.startsWith(expectedStart)) {
      throw new Error(
        `URL não deveria ser essa. Esperado que começasse com "${expectedStart}", mas foi "${currentUrl}"`
      );
    }
  });

test("Acessa veja mais girias na pagina de dicionario", async ({browser}, testInfo) => {
    test.skip(testInfo.project.name !== "Mobile Chrome","Esse teste roda só no contexto mobile (Android Pixel 5)");
    const android = await browser.newContext({
      ...devices["Pixel 5"],
    });
    const page = await android.newPage();
    await page.goto(url);
    await page.getByRole("button", { name: "Abrir menu Fechar menu" }).click();
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    const context = await request.newContext();
    const response = await context.get("https://qualeagiria.com.br/a-z");
    await page.getByText("Gírias que estão na boca do povo:").isVisible();
    await page.getByRole("link", { name: "Ver mais gírias" }).click();
    expect(page.url()).toBe("https://qualeagiria.com.br/top");
  });

test("Clica botão voltar ao topo", async ({browser}, testInfo) => {
    test.skip(testInfo.project.name !== "Mobile Chrome","Esse teste roda só no contexto mobile (Android Pixel 5)");
    const android = await browser.newContext({
      ...devices["Pixel 5"],
    });
    const page = await android.newPage();
    await page.goto(url);
    await page.getByRole("button", { name: "Abrir menu Fechar menu" }).click();
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    const context = await request.newContext();
    const response = await context.get("https://qualeagiria.com.br/a-z");
    await page.getByRole('contentinfo').scrollIntoViewIfNeeded();
    await page.getByRole('contentinfo').isVisible();
    await page.getByText('Este site utiliza cookies para melhorar a experiência do usuário. Aceitar').isVisible()
    await page.getByRole('button', { name: 'Aceitar' }).click()
    await page.getByRole('button', { name: 'Voltar ao topo' }).isVisible();
    await page.getByRole('button', { name: 'Voltar ao topo' }).click();
  });

test("Testa letra A do dicionario", async ({browser}, testInfo) => {
    test.skip(testInfo.project.name !== "Mobile Chrome","Esse teste roda só no contexto mobile (Android Pixel 5)");
    const android = await browser.newContext({
      ...devices["Pixel 5"],
    });
    const page = await android.newPage();
    await page.goto(url);
    await page.getByRole("button", { name: "Abrir menu Fechar menu" }).click();
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    await page.getByRole('link', { name: 'A', exact: true }).click()
    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-a";
    const currentUrl = page.url();
    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

test("Testa letra B do dicionario", async ({browser}, testInfo) => {
    test.skip(testInfo.project.name !== "Mobile Chrome","Esse teste roda só no contexto mobile (Android Pixel 5)");
    const android = await browser.newContext({
      ...devices["Pixel 5"],
    });
    const page = await android.newPage();
    await page.goto(url);
    await page.getByRole("button", { name: "Abrir menu Fechar menu" }).click();
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    await page.getByRole('link', { name: 'B', exact: true }).click()
    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-b";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Testa letra C do dicionario", async ({browser}, testInfo) => {
    test.skip(testInfo.project.name !== "Mobile Chrome","Esse teste roda só no contexto mobile (Android Pixel 5)");
    const android = await browser.newContext({
      ...devices["Pixel 5"],
    });
    const page = await android.newPage();
    await page.goto(url);
    await page.getByRole("button", { name: "Abrir menu Fechar menu" }).click();
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    await page.getByRole('link', { name: 'C', exact: true }).click()
    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-c";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Testa letra D do dicionario", async ({browser}, testInfo) => {
    test.skip(testInfo.project.name !== "Mobile Chrome","Esse teste roda só no contexto mobile (Android Pixel 5)");
    const android = await browser.newContext({
      ...devices["Pixel 5"],
    });
    const page = await android.newPage();
    await page.goto(url);
    await page.getByRole("button", { name: "Abrir menu Fechar menu" }).click();
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    await page.getByRole('link', { name: 'D', exact: true }).click()
    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-d";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Testa letra E do dicionario", async ({browser}, testInfo) => {
    test.skip(testInfo.project.name !== "Mobile Chrome","Esse teste roda só no contexto mobile (Android Pixel 5)");
    const android = await browser.newContext({
      ...devices["Pixel 5"],
    });
    const page = await android.newPage();
    await page.goto(url);
    await page.getByRole("button", { name: "Abrir menu Fechar menu" }).click();
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    await page.getByRole('link', { name: 'E', exact: true }).click()
    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-e";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Testa letra F do dicionario", async ({browser}, testInfo) => {
    test.skip(testInfo.project.name !== "Mobile Chrome","Esse teste roda só no contexto mobile (Android Pixel 5)");
    const android = await browser.newContext({
      ...devices["Pixel 5"],
    });
    const page = await android.newPage();
    await page.goto(url);
    await page.getByRole("button", { name: "Abrir menu Fechar menu" }).click();
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    await page.getByRole('link', { name: 'F', exact: true }).click()
    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-f";
    const currentUrl = page.url();
    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Testa letra G do dicionario", async ({browser}, testInfo) => {
    test.skip(testInfo.project.name !== "Mobile Chrome","Esse teste roda só no contexto mobile (Android Pixel 5)");
    const android = await browser.newContext({
      ...devices["Pixel 5"],
    });
    const page = await android.newPage();
    await page.goto(url);
    await page.getByRole("button", { name: "Abrir menu Fechar menu" }).click();
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    await page.getByRole('link', { name: 'G', exact: true }).click()

    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-g";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Testa letra H do dicionario", async ({browser}, testInfo) => {
    test.skip(testInfo.project.name !== "Mobile Chrome","Esse teste roda só no contexto mobile (Android Pixel 5)");
    const android = await browser.newContext({
      ...devices["Pixel 5"],
    });
    const page = await android.newPage();
    await page.goto(url);
    await page.getByRole("button", { name: "Abrir menu Fechar menu" }).click();
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    await page.getByRole('link', { name: 'H', exact: true }).click()
    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-h";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Testa letra I do dicionario", async ({browser}, testInfo) => {
    test.skip(testInfo.project.name !== "Mobile Chrome","Esse teste roda só no contexto mobile (Android Pixel 5)");
    const android = await browser.newContext({
      ...devices["Pixel 5"],
    });
    const page = await android.newPage();
    await page.goto(url);
    await page.getByRole("button", { name: "Abrir menu Fechar menu" }).click();
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    await page.getByRole('link', { name: 'I', exact: true }).click()
    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-i";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Testa letra J do dicionario", async ({browser}, testInfo) => {
    test.skip(testInfo.project.name !== "Mobile Chrome","Esse teste roda só no contexto mobile (Android Pixel 5)");
    const android = await browser.newContext({
      ...devices["Pixel 5"],
    });
    const page = await android.newPage();
    await page.goto(url);
    await page.getByRole("button", { name: "Abrir menu Fechar menu" }).click();
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    await page.getByRole('link', { name: 'J', exact: true }).click()

    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-j";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Testa letra K do dicionario", async ({browser}, testInfo) => {
    test.skip(testInfo.project.name !== "Mobile Chrome","Esse teste roda só no contexto mobile (Android Pixel 5)");
    const android = await browser.newContext({
      ...devices["Pixel 5"],
    });
    const page = await android.newPage();
    await page.goto(url);
    await page.getByRole("button", { name: "Abrir menu Fechar menu" }).click();
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    await page.getByRole('link', { name: 'K', exact: true }).click()

    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-k";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Testa letra L do dicionario", async ({browser}, testInfo) => {
    test.skip(testInfo.project.name !== "Mobile Chrome","Esse teste roda só no contexto mobile (Android Pixel 5)");
    const android = await browser.newContext({
      ...devices["Pixel 5"],
    });
    const page = await android.newPage();
    await page.goto(url);
    await page.getByRole("button", { name: "Abrir menu Fechar menu" }).click();
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    await page.getByRole('link', { name: 'L', exact: true }).click()

    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-l";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Testa letra M do dicionario", async ({browser}, testInfo) => {
    test.skip(testInfo.project.name !== "Mobile Chrome","Esse teste roda só no contexto mobile (Android Pixel 5)");
    const android = await browser.newContext({
      ...devices["Pixel 5"],
    });
    const page = await android.newPage();
    await page.goto(url);
    await page.getByRole("button", { name: "Abrir menu Fechar menu" }).click();
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    await page.getByRole('link', { name: 'M', exact: true }).click()

    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-m";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Testa letra N do dicionario", async ({browser}, testInfo) => {
    test.skip(testInfo.project.name !== "Mobile Chrome","Esse teste roda só no contexto mobile (Android Pixel 5)");
    const android = await browser.newContext({
      ...devices["Pixel 5"],
    });
    const page = await android.newPage();
    await page.goto(url);
    await page.getByRole("button", { name: "Abrir menu Fechar menu" }).click();
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    await page.getByRole('link', { name: 'N', exact: true }).click()

    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-n";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Testa letra O do dicionario", async ({browser}, testInfo) => {
    test.skip(testInfo.project.name !== "Mobile Chrome","Esse teste roda só no contexto mobile (Android Pixel 5)");
    const android = await browser.newContext({
      ...devices["Pixel 5"],
    });
    const page = await android.newPage();
    await page.goto(url);
    await page.getByRole("button", { name: "Abrir menu Fechar menu" }).click();
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    await page.getByRole('link', { name: 'O', exact: true }).click()

    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-o";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Testa letra P do dicionario", async ({browser}, testInfo) => {
    test.skip(testInfo.project.name !== "Mobile Chrome","Esse teste roda só no contexto mobile (Android Pixel 5)");
    const android = await browser.newContext({
      ...devices["Pixel 5"],
    });
    const page = await android.newPage();
    await page.goto(url);
    await page.getByRole("button", { name: "Abrir menu Fechar menu" }).click();
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    await page.getByRole('link', { name: 'P', exact: true }).click()

    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-p";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Testa letra Q do dicionario", async ({browser}, testInfo) => {
    test.skip(testInfo.project.name !== "Mobile Chrome","Esse teste roda só no contexto mobile (Android Pixel 5)");
    const android = await browser.newContext({
      ...devices["Pixel 5"],
    });
    const page = await android.newPage();
    await page.goto(url);
    await page.getByRole("button", { name: "Abrir menu Fechar menu" }).click();
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    await page.getByRole('link', { name: 'Q', exact: true }).click()

    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-q";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Testa letra R do dicionario", async ({browser}, testInfo) => {
    test.skip(testInfo.project.name !== "Mobile Chrome","Esse teste roda só no contexto mobile (Android Pixel 5)");
    const android = await browser.newContext({
      ...devices["Pixel 5"],
    });
    const page = await android.newPage();
    await page.goto(url);
    await page.getByRole("button", { name: "Abrir menu Fechar menu" }).click();
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    await page.getByRole('link', { name: 'R', exact: true }).click()

    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-r";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Testa letra S do dicionario", async ({browser}, testInfo) => {
    test.skip(testInfo.project.name !== "Mobile Chrome","Esse teste roda só no contexto mobile (Android Pixel 5)");
    const android = await browser.newContext({
      ...devices["Pixel 5"],
    });
    const page = await android.newPage();
    await page.goto(url);
    await page.getByRole("button", { name: "Abrir menu Fechar menu" }).click();
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    await page.getByRole('link', { name: 'S', exact: true }).click()

    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-s";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Testa letra T do dicionario", async ({browser}, testInfo) => {
    test.skip(testInfo.project.name !== "Mobile Chrome","Esse teste roda só no contexto mobile (Android Pixel 5)");
    const android = await browser.newContext({
      ...devices["Pixel 5"],
    });
    const page = await android.newPage();
    await page.goto(url);
    await page.getByRole("button", { name: "Abrir menu Fechar menu" }).click();
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    await page.getByRole('link', { name: 'T', exact: true }).click()

    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-t";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Testa letra U do dicionario", async ({browser}, testInfo) => {
    test.skip(testInfo.project.name !== "Mobile Chrome","Esse teste roda só no contexto mobile (Android Pixel 5)");
    const android = await browser.newContext({
      ...devices["Pixel 5"],
    });
    const page = await android.newPage();
    await page.goto(url);
    await page.getByRole("button", { name: "Abrir menu Fechar menu" }).click();
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    await page.getByRole('link', { name: 'U', exact: true }).click()

    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-u";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Testa letra V do dicionario", async ({browser}, testInfo) => {
    test.skip(testInfo.project.name !== "Mobile Chrome","Esse teste roda só no contexto mobile (Android Pixel 5)");
    const android = await browser.newContext({
      ...devices["Pixel 5"],
    });
    const page = await android.newPage();
    await page.goto(url);
    await page.getByRole("button", { name: "Abrir menu Fechar menu" }).click();
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    await page.getByRole('link', { name: 'V', exact: true }).click()

    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-v";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Testa letra W do dicionario", async ({browser}, testInfo) => {
    test.skip(testInfo.project.name !== "Mobile Chrome","Esse teste roda só no contexto mobile (Android Pixel 5)");
    const android = await browser.newContext({
      ...devices["Pixel 5"],
    });
    const page = await android.newPage();
    await page.goto(url);
    await page.getByRole("button", { name: "Abrir menu Fechar menu" }).click();
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    await page.getByRole('link', { name: 'W', exact: true }).click()

    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-w";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Testa letra X do dicionario", async ({browser}, testInfo) => {
    test.skip(testInfo.project.name !== "Mobile Chrome","Esse teste roda só no contexto mobile (Android Pixel 5)");
    const android = await browser.newContext({
      ...devices["Pixel 5"],
    });
    const page = await android.newPage();
    await page.goto(url);
    await page.getByRole("button", { name: "Abrir menu Fechar menu" }).click();
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    await page.getByRole('link', { name: 'X', exact: true }).click()

    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-x";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });

  test("Testa letra Z do dicionario", async ({browser}, testInfo) => {
    test.skip(testInfo.project.name !== "Mobile Chrome","Esse teste roda só no contexto mobile (Android Pixel 5)");
    const android = await browser.newContext({
      ...devices["Pixel 5"],
    });
    const page = await android.newPage();
    await page.goto(url);
    await page.getByRole("button", { name: "Abrir menu Fechar menu" }).click();
    await page.getByRole("link", { name: "Dicionário A-Z" }).click();
    await page.getByRole('link', { name: 'Z', exact: true }).click()

    const expectedUrl = "https://qualeagiria.com.br/a-z/letra-z";
    const currentUrl = page.url();

    try {
      expect(currentUrl).toBe(expectedUrl);
    } catch (error) {
      throw new Error(
        `Erro de navegação: URL esperada era "${expectedUrl}", mas a atual é "${currentUrl}". Verifique redirecionamentos ou autenticação.`
      );
    }
  });
});
