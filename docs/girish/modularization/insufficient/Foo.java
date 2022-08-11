package girish.modularization.insufficient;

public class Foo {
	//McCabe Cyclomatic Complexity = 3
	public void bar() {
		String s = "Halo Dunia";
		System.out.println(s);
		
		int capitalCount = 0;
		
		for(int i = 0; i < s.length(); i++) {
			char c = s.charAt(i);
			if(c >= 'A' && c <= 'Z') capitalCount++;
		}
		
		System.out.println(capitalCount);
	}
}
